var readline = require('readline');
var utility = require('../Utility/utility.js');

var read = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function stopWatch()
{
    read.question("Press 1 to start the stopwatch ", function(start)
    {
    var finalTime=0, initialTime=0;
        if(start == 1)    
        {
            initialTime = utility.getTime();
            console.log("start time is :" + initialTime);
            read.question("Press 2 to stop the stopwatch ", function(stop)
            { 
                if(stop == 2) 
                {
                finalTime = utility.getTime();
                console.log("stop time is :" + finalTime);
                var res = utility.ellapsed( initialTime, finalTime);

                console.log("The ellapsed time is "+res);
                read.close();
                }
                else
                {
                    console.log("Invalid key");
                    read.close() 
                }
            }); 
        }
        else
        {
            console.log("Invalid key");
        }
     });
 }


      
stopWatch();  

/*var utility = require('../Utility/utility.js');
var prompt = require('prompt-sync')();


var initial = 0;
var final = 0;

function stopWatch () {

    var start = prompt('press 1 for start ');

    if(start == 1) {

      initial = utility.getTime();
        
      var stop = prompt('press 0 for stop');

      if(stop == 0) {

        final = utility.getTime();
      }
    }

    utility.ellapsed(initial,final);
}

stopWatch(); */