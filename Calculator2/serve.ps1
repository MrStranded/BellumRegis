# Bellum Regis — local network server
# Serves from the repo root so that ../Calculator/... paths resolve correctly.

$port     = 8080
$rootPath = Split-Path $PSScriptRoot -Parent   # StrategyBoardGame/

$localIP = (Get-NetIPAddress -AddressFamily IPv4 |
    Where-Object { $_.IPAddress -notmatch '^127\.' -and $_.IPAddress -notmatch '^169\.' } |
    Select-Object -First 1).IPAddress

$networkUrl = if ($localIP) { "http://${localIP}:$port/Calculator2/" } else { "http://localhost:$port/Calculator2/" }

# ── QR page HTML ──────────────────────────────────────────────────────────

$qrPage = @"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bellum Regis &middot; Share</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: system-ui, sans-serif;
      background: #12121e;
      color: #ddd;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.25rem;
      padding: 2rem;
    }
    h1 { color: #c9a84c; font-size: 1.1rem; letter-spacing: 0.1em; text-transform: uppercase; }
    .card {
      background: #1c1c30;
      border: 1px solid #2e2e4a;
      border-radius: 12px;
      padding: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .url  { font-size: 0.85rem; color: #888; font-family: monospace; word-break: break-all; max-width: 280px; text-align: center; }
    .hint { font-size: 0.72rem; color: #444; text-transform: uppercase; letter-spacing: 0.1em; }
  </style>
</head>
<body>
  <h1>Bellum Regis &middot; Calculator</h1>
  <div class="card"><div id="qr"></div></div>
  <p class="url">$networkUrl</p>
  <p class="hint">Scan to open on your device</p>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
  <script>
    new QRCode(document.getElementById('qr'), {
      text: '$networkUrl',
      width: 220, height: 220,
      colorDark: '#c9a84c', colorLight: '#1c1c30'
    });
  </script>
</body>
</html>
"@

# ── Firewall ──────────────────────────────────────────────────────────────

$fwRuleName = "Bellum Regis Calculator (port $port)"
Remove-NetFirewallRule -DisplayName $fwRuleName -ErrorAction SilentlyContinue
New-NetFirewallRule -DisplayName $fwRuleName -Direction Inbound -Protocol TCP -LocalPort $port -Action Allow | Out-Null

# ── Start listener ────────────────────────────────────────────────────────

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://+:$port/")
try {
    $listener.Start()
} catch {
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add("http://localhost:$port/")
    $listener.Start()
    $localIP    = $null
    $networkUrl = "http://localhost:$port/Calculator2/"
}

Write-Host ""
Write-Host "  Bellum Regis Calculator" -ForegroundColor Cyan
Write-Host "  ========================" -ForegroundColor DarkCyan
Write-Host "  Local:   http://localhost:$port/Calculator2/"
if ($localIP) {
    Write-Host "  Network: $networkUrl" -ForegroundColor Green
} else {
    Write-Host "  Network: run serve.bat as admin for network access" -ForegroundColor Yellow
}
Write-Host ""
Write-Host "  Opening QR code in browser..."
Write-Host "  Press Ctrl+C to stop."
Write-Host ""

# Open QR page after listener is ready
Start-Job -ScriptBlock { Start-Sleep -Milliseconds 400; Start-Process "http://localhost:$using:port/qr" } | Out-Null

# ── MIME types ────────────────────────────────────────────────────────────

$mimeTypes = @{
    '.html' = 'text/html; charset=utf-8'
    '.css'  = 'text/css; charset=utf-8'
    '.js'   = 'application/javascript; charset=utf-8'
    '.pdf'  = 'application/pdf'
    '.png'  = 'image/png'
    '.jpg'  = 'image/jpeg'
    '.ico'  = 'image/x-icon'
}

# ── Request loop ──────────────────────────────────────────────────────────

try { while ($listener.IsListening) {
    $context  = $listener.GetContext()
    $request  = $context.Request
    $response = $context.Response
    $urlPath  = $request.Url.LocalPath

    # QR page
    if ($urlPath -eq '/qr') {
        $body = [System.Text.Encoding]::UTF8.GetBytes($qrPage)
        $response.ContentType     = 'text/html; charset=utf-8'
        $response.ContentLength64 = $body.Length
        $response.OutputStream.Write($body, 0, $body.Length)
        $response.OutputStream.Close()
        Write-Host "  200 /qr"
        continue
    }

    # Redirect bare roots to the app
    if ($urlPath -eq '/' -or $urlPath -eq '/Calculator2' -or $urlPath -eq '/Calculator2/') {
        $response.Redirect("http://$($request.Url.Host):$port/Calculator2/index.html")
        $response.OutputStream.Close()
        continue
    }

    # Static files
    $filePath = Join-Path $rootPath ($urlPath.TrimStart('/').Replace('/', [System.IO.Path]::DirectorySeparatorChar))

    if (Test-Path $filePath -PathType Leaf) {
        $ext         = [System.IO.Path]::GetExtension($filePath).ToLower()
        $contentType = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { 'application/octet-stream' }
        $content     = [System.IO.File]::ReadAllBytes($filePath)

        $response.ContentType     = $contentType
        $response.ContentLength64 = $content.Length
        $response.OutputStream.Write($content, 0, $content.Length)
        Write-Host "  200 $urlPath"
    } else {
        $body = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $urlPath")
        $response.StatusCode      = 404
        $response.ContentLength64 = $body.Length
        $response.OutputStream.Write($body, 0, $body.Length)
        Write-Host "  404 $urlPath" -ForegroundColor DarkGray
    }

    $response.OutputStream.Close()
} } finally {
    $listener.Stop()
    Remove-NetFirewallRule -DisplayName $fwRuleName -ErrorAction SilentlyContinue
    Write-Host ""
    Write-Host "  Server stopped. Firewall rule removed." -ForegroundColor DarkGray
}
