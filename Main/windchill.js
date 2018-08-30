var readline = require('readline');
var utility = require('../Utility/utility.js');
var read = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function windChill()
{
    
    read.question("Enter the temperature in farenheit ", function(temp){ 
    read.question("Enter the wind speed in hours ", function(speed){ 
    utility.windChill(temp , speed);
    read.close();  
})
})
}
windChill();