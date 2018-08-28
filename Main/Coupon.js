var readline = require('readline');
var utility = require('../Utility/utility.js');
var read = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function coupon()
{
    
    read.question("The minimum value is :", function(minValue){
    read.question("The maximum value is :", function(maxVAlue){  
    read.question("The number of coupons :", function(number){     
        utility.coupon(minValue, maxVAlue,number);
        read.close();
    })
})
})
}
coupon();