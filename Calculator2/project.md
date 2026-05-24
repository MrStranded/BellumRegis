This project contains the files for Bellum Regis, a turn-based board game heavily inspired by Age of Empires 2.
It tries to capture the feeling of the computer game in a cardboard and plastic setting.
Bellum Regis can be played with one to six players, usually in the form of two teams facing each other.

The core concept is that there are two representations to most pieces:
Once as a model on the game board and once with a card in front of the player.
The board represents the map, the card represents the state of the piece and also shows which actions are available to the piece.

Pieces can perform two kinds of actions: Limited actions and free actions.
Each turn, a player has only a certain number of limited actions that he can perform with his pieces.
Free actions are not limited.

Examples:
A swordsman can move two steps with a free action.
A barracks can recruit a swordsman for a limited action point, one food and one gold.

These actions require dice throws: Gathering a resource, attacking another piece, attempting a conversion.
The dice are ten-sided and range from 1 to 10. To the dice throw, modifiers are applied. Some attacks use multiple dice where their values are summed up.
Attacks come in three forms: Slash damage, pierce damage and blunt damage. Each piece also has an armor value for each damage type.
To calculate the damage of an attack, the attack value (dice + modifiers) is divided by the corresponding armor value (armor value + modifiers) and rounded down.

Example:
The swordsman attacks a scout with slash damage. The attacking player rolls a 7. The swordsman has an attack modifier of 2.
The scout has 3 slash armor. The defending player has a technology giving the scout +1 on each armor type.
Thus damage = floor((7 + 2) / (3 + 1)) = floor(9 / 4) = 1

Instruction for Claude:
Only perform edits in the "Calculator2" folder, the others are read-only to gather information and I want to keep control there.
In the "Calculator2" folder, you are free to create, edit and delete files as required.
Thank you for collaborating on this project with me.

First priority is creating a simple web page where we can calculate the expected damage when piece A attacks piece B.
The data for the units can be found here: "Calculator/Calculator/js/data/slow.js".
My own damage calculation can be found here: "Calculator/Calculator/js/calculator/basics.js" and "Calculator/Calculator/js/calculator/divisor.js".

The web page should use only readily available web technology. I want it to load quickly and cause no problems on any device. Also I do not want to manage dependencies.