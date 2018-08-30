var readline = require('readline');
var utility = require('../Utility/utility.js');
var read = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function gambling()
{
    
    read.question("What is the stake you would like to play for ? ", function(userInput){
    read.question("How many times you would like to play ? ", function(amount){
    read.question("What is your goal fair ? ", function(goal){
        utility.gambling(userInput, amount, goal);
        read.close();
    })
    })
    })
}
gambling();