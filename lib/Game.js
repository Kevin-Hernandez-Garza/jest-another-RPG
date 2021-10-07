const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');


function Game() {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;
}


// method
Game.prototype.initializeGame = function () {
    // enemies array
    this.enemies.push(new Enemy('goblin', 'sword'));
    this.enemies.push(new Enemy('orc', 'baseball bat'));
    this.enemies.push(new Enemy('skeleton', 'axe'));

    // when the game starts the Player should battle the first enemy on index [0]
    this.currentEnemy = this.enemies[0];

    // use inquirer prompt to ask for player name 
    inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: 'What is your name?'
        })
        //destructure name from the prompt object
        .then(({name}) => {
            this.player = new Player(name);

            //test the object creation
            // console.log(this.currentEnemy, this.player);

            this.startNewBattle();
        });
};

module.exports = Game;