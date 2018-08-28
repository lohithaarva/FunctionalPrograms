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
            if(Math.random() > 0.5) //math random function which is used to calculate the random numbers greater than 0.5
            {
              headCount++; //
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
            console.log("Number of losses are " + loss)
            console.log("Number of won " + win)
          console.log("Number of times he has won" +win + " Won percentage is " +(win/userInput)*100 + " %"); 
          console.log("Number of times he has lost:" +loss + "Loss percentage is "+(loss/userInput)*100 + " %"); 
        },
          
        coupon : function(minValue ,maxValue,number)
        {
           var maxValue,minValue,number;
           var arr = [];
           for (var i = 0;i<= number;i++)
           {
               arr.push(Math.floor(Math.random(minValue,maxValue)* 1000000));
           }
           for(var j =0;j<=arr.length;j++)
           {    
               if(arr[j]==arr[i+1])
            {
                 arr.pop(arr[i]);
            }
        }
         for(var k=0; k<arr.length; k++)
        {
            console.log('Distinct random numbers are ' +arr[k]);
        }
    },
        
        distance : function(x , y)
        {
            var x , y , result = Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
            console.log("The Euclidean distance between " + x + " and " + y + " is :" + result );
        },

        getTime : function() {

            var date = new Date();

           var n = date.getTime();
           return n;

        },
        

        ellapsed : function(initialTime, finalTime)
        {
            var result = (finalTime - initialTime)/1000;
            return result;
        },
    
        /* Any other program for stop watch using inbuilt function
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

       quadratic : function(a , b , c)
       {
            var delta, root1, root2, realPart;
            delta = b*b - 4*a*c
            console.log('Delta value is :' +delta)
               if(delta > 0)
            {
                root1  = -b + Math.sqrt(delta)/(2*a)
                root2  = -b - Math.sqrt(delta)/(2*a)
                console.log("The root1 of x is " +root1);
                console.log("The root2 of x is " +root2);
            }
            if(delta ==0)
            {
                root1 = -b / (2*a)
                root2 = -b/ (2*a)
                console.log("The root1 of x is " +root1);
                console.log("The root2 of x is " +root2);
            }
            if(delta < 0)
            {
                realPart = -b / (2*a);
                imaginaryPart =Math.sqrt(-delta)/(2*a)
                console.log("The realPart  of x is " +realPart);
                console.log("The imaginaryPart of x is " +imaginaryPart);
            }
            
       },

       windChill : function(temp, speed)
       {
           if(temp < 50 && speed < 120 && speed > 3)
           { 
           var wind = (35.74 + 0.6215 * temp + (0.4275 * temp - 35.75) )*Math.pow(speed , 0.16)
           console.log("The effective temperature temperature is : " + wind)
           }
           else 
           {
               console.log("Enter the correct range of temperarure and windspeed");
           }
       },

       array : function(row)
       {
           var arr = new Array(row);
           var prompt = require('prompt-sync')();
           var column = prompt("Enter number of columns :");
           for(var i =0;i<row;i++)
           {
               arr[i]=new Array(column);
               for(var j = 0; j<column;j++)
            {
                arr [i][j] = prompt ("Enter the elements of the array :");
            }            
       }
       console.log(arr);
    },

    triplets : function(row)
    {
        var prompt = require('prompt-sync')();
        var arr = new Array(row);
        var array1 = new Array();
        for(var index = 0; index < row; index ++)
        {
             arr[index] = prompt("Enter the elements");
        }
             for(var i =0; i<(arr.length -2); i++)
            {
                for (var j= i+1; j<(arr.length-1); j++)
                 {
                    for (var k = j+1; k <(arr.length); k++)
                    {
                         var sum = Number(arr[i]) + Number (arr [j]) + Number (arr [k]);
                            if(sum ==0)
                            {
                                console.log("The triplets are : " +arr[i]+","+arr[j]+","+arr[k]);
                            }
                        }
                        }
                                /*function removeDuplicates(arr)
                                {
                                    var unique = []
                                    for(var i =0;i<arr.length;i++)
                                    {
                                        if(unique.indexOf(arr[i]) == -1)
                                        {
                                            unique.push (arr[i])
                                        }
                                    }
                                    return unique;
                                }
                                */
                    }
                    
                
            
        }
    }

                    











    


    

    

