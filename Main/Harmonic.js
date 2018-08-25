var readline = require('readline');
var utility = require('../Utility/utility.js');
var read = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function Harmonic()
{
    var userinput;
    read.question("Enter the value to know harmonic series : ", function(userinput){
        utility.Harmonic(userinput);
        read.close();
    })
}
Harmonic();