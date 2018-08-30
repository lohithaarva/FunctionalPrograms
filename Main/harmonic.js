var readline = require('readline');
var utility = require('../Utility/utility.js');
var read = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function harmonic()
{
    var userInput;
    read.question("Enter the value to know harmonic series : ", function(userInput){
        utility.harmonic(userInput);
        read.close();
    })
}
harmonic();