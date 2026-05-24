@echo off
:: Re-launch as admin if not already elevated (needed for network access)
NET SESSION >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    powershell -Command "Start-Process cmd -ArgumentList '/c \"%~f0\"' -Verb RunAs"
    exit /B
)
powershell -ExecutionPolicy Bypass -File "%~dp0serve.ps1"
pause
