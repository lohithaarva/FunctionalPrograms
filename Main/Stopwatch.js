var readline = require('readline');
var utility = require('../Utility/utility.js');
var read = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function stopWatch()
{
    
    read.question("To start the stopwatch press 1 ", function(initialTime){ 
    utility.stopWatch(initialTime);
    read.close(); 
    read.question("To end the stopwatch press 2 ", function(endTime){ 
    utility.stopWatch(endTime);
    read.close();  
})
})
}
stopWatch();