var readline = require('readline');
var utility = require('../Utility/utility.js');
var read = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function powerOfTwo()
{
    var userinput;
    read.question("The power value of : ", function(userinput){
        utility.powerOfTwo(userinput);
        read.close();
    })
}
powerOfTwo();