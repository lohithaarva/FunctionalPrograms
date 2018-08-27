var readline = require('readline');
var utility = require('../Utility/utility.js');
var read = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function distance()
{
    
    read.question("Enter the value of x :", function(x){
    read.question("Enter the value of y :", function(y){    
        utility.distance(x, y);
        read.close();
    })
})
}
distance();