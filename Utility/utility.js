/**
 * @description Dependencies require to be installed before the execution of this file.
 * @var {Class} prompt class instance of the prompt
 */
module.exports = {

/**
 *@description Take a User Input and Replace String Template “Hello <<UserName>>, How are you?”
 */
    /**
     * @description Class Hello
     *  
     * @class Hello
     * @parameter {userInput}
     */
        hello : function(userInput) 
        /**
        * @description  userInput variable stores the number entered by the user as a input.
         */
         {
             /**
             * @description Checks condition if the entered userInput is more than 3 characters in size
              */
        if(userInput.length>=3) 
        {
            console.log("Hey " + userInput + "! How are you");
        }
            else
                {
                console.log("Please enter a valid name"); 
                }
                
    },

    /**
        * @description  Flip Coin and print percentage of Heads and Tails
         */
        /**
     * @description Class Coin
     *  
     * @class Coin
     * @parameter {userInput}
     */
     flipCoin : function(userInput)
     /**
        * @description  userInput variable stores the number of times the coin is flipped
         */
     {
        var headCount = 0, tailCount = 0, userInput; //variables declared 
        /**
        * @description Try all possible ways while tossing a coin
        * if the declared varialble i is less than userInput, calcualte the mathrandom function 
        */
        for (var i = 0; i < userInput; i++) {  
            if(Math.random() > 0.5) 
            {
              headCount++; //
            } 
            else
                {
                tailCount ++; //else if not increment tailCount
                }
        } //end of the loop
          console.log("Times head was flipped:" + headCount + " Percentage of head is " +(headCount/userInput)*100 + "%"); 
          console.log("Times tail was flipped:" + tailCount + " Percentage of head is " +(tailCount/userInput)*100 + "%"); 
    
        },

        /**
        *@description Check if the year is leapyear or not
        */
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

        /**
        * @description  userInput variable stores the number entered by the user as the input.
         */
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
         /**
        * @description  userInput variable stores the number entered by the user as the input.
         */
        Harmonic : function(userInput)
        {
            var sum=0;
            for(var i=1;i<=userInput;i++)
            {
                sum = sum +( 1/i );
            }
            console.log("The value of the nth harmonic series " + sum);
     },
         /**
        * @description  userInput variable stores the number entered by the user as the input.
         */
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
        /**
        * @description  userInput variable stores the number entered by the user as the input.
         */
         gambling: function(userInput, amount, goal)
        {
        var goal,amount, win=0;loss=0;
            
                    while (amount!=0 && amount<= goal && userInput > 0)
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
                console.log("Number of losses are " + loss)
                console.log("Number of won " + win)
                console.log("Number of times he has won" +win + " Won percentage is " +(win/userInput)*100 + " %"); 
                console.log("Number of times he has lost:" +loss + "Loss percentage is "+(loss/userInput)*100 + " %"); 
                
    },
         /**
        * @description  userInput variable stores the number entered by the user as the input.
         */ 
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
        /**
        * @description  userInput variable stores the number entered by the user as the input.
         */
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
        
        /**
        * @description  userInput variable stores the number entered by the user as the input.
         */

        ellapsed : function(initialTime, finalTime)
        {
            var result = (finalTime - initialTime)/1000;
            return result;
        },
    
        /* Any other program for stop watch usingelse { inbuilt function
        var Stopwatch = require("node-stopwatch")                    console.log("cannot play").Stopwatch;
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
    
        /**
        * @description  userInput variable stores the number entered by the user as the input.
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
        /**
        * @description  It takes two double command­line arguments and v and prints the wind chill..
         */
       windChill : function(temp, speed)
       {
           /**
            * @description condition where temperature is less than 50 and 
            * checks with the speed which is should be less than 120 and more than 3.
            */
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
       /**
        * @description  userInput variable stores the number entered by the user as the input.
         */
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
    /**
        * @description  userInput variable stores the number entered by the user as the input.
         */
    triplets : function(row)
    {
        var prompt = require('prompt-sync')();
        var arr = new Array(row);
        var array1 = new Array();
        for(var index = 0; index < row; index ++)
        {
             arr[index] = prompt("Enter the elements ");
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
                                //console.log("The triplets are : " +arr[i]+","+arr[j]+","+arr[k]);
                                array1.push(arr[i] + ' ' + arr[j] + ' '+arr[k])
                            }
                    }
                }
            }
                                function removeDuplicates(arr)
                                {
                                    var unique = [];
                                    for(var i =0;i<arr.length;i++)
                                    {
                                        if(unique.indexOf(arr[i]) == -1)
                                        {
                                            unique.push (arr[i]);
                                        }
                                    }
                                    return unique;
                                    
                                }
                              // var  res = removeDuplicates(array1)
                                
                              //  console.log( res.split('') );
                                console.log(removeDuplicates(array1))
                            },
     /**
        * @description  userInput variable stores the number entered by the user as the input.
         */
     permute : function(str, firstIndex , lastIndex)
     {
         if(lastIndex === firstIndex)
            {
                 console.log(str.join(''))
                    
            }
             else
             {
                for(var i = firstIndex ; i <=lastIndex ; i++)
                    {
                       
                       this.swap(str , firstIndex , i)
                       // console.log( str)
                       this.permute(str , firstIndex+1, lastIndex)
                       // console.log( str)
                       this.swap(str , i , firstIndex)
                       // console.log( str)
                       
                    }    
            }       
            },
     swap :function(str , i, j)
        {
             var temp;
            temp = str[i];
            str[i] = str[j];
            str[j] = temp;
            return str;           
         },
     /**
        * @description  userInput variable stores the number entered by the user as the input.
         */
     tictactoe : function()
     {
        var game = new TicTacToe();

        game.intitializeBoard();
        game.determineFirstTurn();
        
        game.turn();
    }
     


    }


                    











    


    

    

