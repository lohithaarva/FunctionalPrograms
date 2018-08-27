module.exports = {
    //User Input and Replace String Template “Hello <<UserName>>, How are you?”
    hello : function(userInput) // Take name as userInput
    {
        if(userInput.length>=3) //The entered name should be greater than or equal to 3 characters
        {
            console.log("Hey " + userInput + "! How are you");// print if the name is more than 3 characters
        }
            else
                {
                console.log("Please enter a name which has more than 3 characters"); // else request the user to provide more than 3 characters 
                }
                
    },

    // Flip Coin and print percentage of Heads and Tails
     flipCoin : function(userInput) //number of times the coin filped is taken as userInput
     {
        var headCount = 0, tailCount = 0, userInput; //variables declared 
        
        for (var i = 0; i < userInput; i++) {  //Taking an variable i and checking how many times the coin is flipped 
            if(Math.random() > 0.5) //math random function which is used to calculate the random which is grater than 0.5
            {
              headCount++; //iire
            } 
            else
                {
                tailCount ++; //else if not increment tailCount
                }
        }
          console.log("Times head was flipped:" + headCount + " Percentage of head is " +(headCount/userInput)*100 + "%"); 
          console.log("Times tail was flipped:" + tailCount + " Percentage of head is " +(tailCount/userInput)*100 + "%"); 
    
        },

        //Leap year 
      leapYear : function(userinput)
        {
            var year = userinput; //declaring a variable year
            if(year % 4 == 0 && year % 100 !=0 || year % 400 ==0) //logic to find leap year
            {
                console.log("It's a leap year");//if the condition is true it's a leap year
            }
            else
            {
                console.log("It's not a leap year"); //else it's not a leap year
            } 
        },

        //Power of Two
        powerOfTwo : function(userinput)
        {   
            var number = userinput,
            i = 0,
            power = 1;
 
            console.log("Powers of " + userinput + " that are less than 2^" +userinput);
            while (i <= userinput) //checks wheather i is less than the userinput
            {
                console.log("2^"+i+" = " + power); // if true, calculate 2 power of i everytime.
                power = power * 2; //save the value in power and multiply  by 2
                i++; // after each loop increment i
            }
        },
     

        Harmonic : function(userInput)
        {
            var sum=0;
            for(var i=1;i<=userInput;i++)
            {
                sum = sum +( 1/i );
            }
            console.log("The value of the nth harmonic series " + sum);
     },
         
        Factors : function(userinput)
        {
            function isPrime(n){
                if (n === 1)
                {         
                  return false;
                }
                    else if (n === 2)
                    {
                        return true;  
                    }
                        else{
                        for (var x = 2; x < n; x ++){
                            if (n % x === 0){
                            return false;
                    }
                  }
                return true;
                }
                }
                 var primeFac = [];
                for (var x = 0; x <= userinput; x++){
                    if (userinput % x === 0 && isPrime(x) === true){
                        primeFac.push(x);
                }
                }
                console.log(`${primeFac}`);
        },

         gambling: function(userInput, amount, goal)
        {
        var goal,amount, win=0;loss=0;
        for (var i = 0; i < userInput; i++)
            {
            if(amount!=0 || amount<goal)
                {   
                if(Math.random()> 0.5)
                    {
                    console.log("won");
                    win++;
                    amount++;
                    
                    }
                 else
                        {
                        console.log("loss");
                        loss++;
                        amount--;
                        }
         
                    }
            }
          console.log("Number of times he has won" +win + " Won percentage is " +(win/userInput)*100); 
          console.log("Number of times he has lost:" +loss + "Loss percentage is "+(loss/userInput)*100); 
        },
          
        coupon : function(rangeMin ,rangeMax)
        {
            var n = [];       
            
            var count = 0;                          
            var distinct = 0;                       
      
        
            while (distinct < n) {
                var value = (Math.random() * n);   
                count++;                              
                if (!isCollected[value]) {
                    distinct++;
                    isCollected[value] = true;
               }
            }
        },
        
        distance : function(x , y)
        {
            var x , y , result = Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
            console.log("The Euclidean distance between " + x + " and " + y + " is :" + result );
        },

        stopWatch : function(initialTime,endTime)
        {
            var startTime=0, endTime=0 , ellapsedTime;
            {
                if(initialTime == 1)
                { 
                    start();
                }
                function start()
                    {
                    var d1 = new Date();
                    startTime = d1.getMilliseconds();
                    console.log("Time started at : " +startTime);
                    }
                
                function stop()
                    {
                    stopTime = date.getSeconds();
                    console.log("Time ends at : " +endTime);
                    }
                function ellapsedTime()
                    {
                    ellapsedTime = startTime - endTime;
                    console.log("the ellapsed time is : " + ellapsedTime);
                    } 
             }
            
        
    } 
        /*
        var Stopwatch = require("node-stopwatch").Stopwatch;
        var stopwatch = Stopwatch.create();
        var s = 1;
        if(userInput == s)
        {
            stopwatch.start();
              //start the stop watch
        console.log("ticks: " + stopwatch.elapsedTicks);
        console.log("milliseconds: " + stopwatch.elapsedMilliseconds);
        console.log("seconds: " + stopwatch.elapsed.seconds);
        console.log("minutes: " + stopwatch.elapsed.minutes);
        console.log("hours: " + stopwatch.elapsed.hours);
        
        //stop the stopwatch
        stopwatch.stop();
        }
        else
        {
            console.log("press the valid key");
        }
        */
}










    


    

    

