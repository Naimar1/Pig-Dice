# Pig Dice , 14/1/2019
## Author
#### **Naima Niyigena**
## Description
This is a Pig Dice game, it requires two players. 
When a one is rolled, accumulated points are discarded and the other player takes over the dice.
When Hold is pressed, the accumulated points are added to the player's final Score.
The other player then takes the die over.
## BDD Specification
| Behavior        | Input           | Outcome  |
| ------------- |:-------------:| -----:|
| Player 1 inputs name and Player 2 inputs name, and clicks start button | Player 1: Naima / Player 2: Wivine / Click START | Goes to game console |
| Player 1 clicks ROLL button | Click ROLL button | Dice rolls and number is generated
| If Player 1 rolls any number other than 1, that roll is added to round total | Roll = 2 | Round total = 2 |
| If Player 1 rolls a 1, no score is added and round for Player 1 ends | Roll = 1 | Round total = 2 / Total score = 2 / Player 2 begins |
| Repeat for Player 2 | Roll = 1 | Round total = 0 / Total score = 0 / Player 1 begins |
| When a player's total score reaches 100 or more, game ends and winner page shows | Player 1 total score = 100 | Winner page |
## Setup/Installation Requirements
* link to visit site: https://naimar1.github.io/Pig-Dice/
* cd Pig-Dice
* code . (if you are using visual studio)
* atom .
## Known Bugs
Hope that my codes of this page is clear and understandable,
there is no error, by mistake if you find it please contact me for the below address
## Technologies Used
 * html
 * css 
 * javascript
 * jquery
## Support and contact details
Don't hesitate to contact me if you get a confusion or any other question,suggestion etc
* Tel:0788358969
* email:naiglyme1@gmail.com
### License
* MIT License
* Copyright (c) 2018 NAIMA NIYIGENA