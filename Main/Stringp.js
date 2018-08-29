var readline = require('readline');
var utility = require('../Utility/utility.js');

var read = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function permute()
{
    read.question("Enter a value to calculate permutation ", function(string)
    {
        var strArray = string.split('');
        utility.permute(strArray , 0 , strArray.length-1);
        read.close();
    });
    }
permute();