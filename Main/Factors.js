var readline = require('readline');
var utility = require('../Utility/utility.js');
var read = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function Factors()
{
    
    read.question("The prime factors of :", function(userinput){
        utility.Factors(userinput);
        read.close();
    })
}
Factors();