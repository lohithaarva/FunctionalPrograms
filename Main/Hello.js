var readline = require('readline');
var utility = require('../Utility/utility.js');
var read = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function hello()
{
    read.question("Enter your user name: ", function(userinput){
        utility.hello(userinput);
        read.close();
    })
}
hello();