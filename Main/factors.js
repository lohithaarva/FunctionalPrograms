var readline = require('readline');
var utility = require('../Utility/utility.js');
var read = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function factors()
{
    
    read.question("The prime factors of :", function(userinput){
        utility.factors(userinput);
        read.close();
    })
}
factors();