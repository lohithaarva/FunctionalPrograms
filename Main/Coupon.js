var readline = require('readline');
var utility = require('../Utility/utility.js');
var read = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function coupon()
{
    
    read.question("The minimum value is :", function(rangeMin){
    read.question("The maximum value is :", function(rangeMax){    
        utility.coupon(rangeMin, rangeMax);
        read.close();
    })
})
}
coupon();