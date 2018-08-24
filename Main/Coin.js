var readline = require('readline');
var utility = require('../Utility/utility.js');
var read = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function flipCoin()
{
    read.question("Enter the times you flip a coin :" ,function(userinput){
        utility.flipCoin(userinput);
        read.close();
    })
}
flipCoin();