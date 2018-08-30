/**
 * @description Dependencies require to be installed before the execution of this file.
 * @var {Class} prompt class instance of the prompt
 */
const _ = require('lodash');
module.exports = {

/** 
*@description Take a User Input and Replace String Template “Hello <<UserName>>, How are you?”
*@param userInput stores the number entered by the user as input
*/
    hello : function(userInput)  
    {
        /**
        @description Checks condition if the entered userInput is more than 3 characters in size
        */
        if(userInput.length>=3 && (userInput >='a' && userInput <='z' || userInput >='A' && userInput <='Z'))
        {
            console.log("Hey " + userInput + "! How are you");
        }
            else
                {
                console.log("Please enter a valid name"); 
                }
                
        },

/*************************************************************************************
*@description  A Flip Coin and print percentage of Heads and Tail
*@param userInput takes number of times the coin is flipped from the user
*/
    flipCoin : function(userInput)
    {
        var headCount = 0, tailCount = 0, userInput; //variables declaration and initialization
        /**
        * @description Try all possible ways while tossing a coin,
        * if the declared number is less than userInput, calcualte the mathrandom function 
        */
        for (var number = 0; number < userInput; number++) 
        {  
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

/*******************************************************************************************
*@description Check if the year is leapyear or not
*@param userInput takes an year,with 4 digit number
*/
    leapYear : function(userinput)
        {
            var year = userinput; //declaring a variable year, which holds user input
            if(year % 4 == 0 && year % 100 !=0 || year % 400 ==0) //logic to find leap year
            {
                console.log("It's a leap year");
            }
                else
                {
                    console.log("It's not a leap year"); 
                } 
        },

/*******************************************************************************************
*@description This code takes a command­line argument N and prints a table of the
powers of 2 that are less than or equal to 2^N.
*@param userInput The Power Value N is entered by user
*/
        powerOfTwo : function(userinput)
        {   
            var number = userinput,  //number holds the value entered by the user
            parse = 0, //parse is used to calculate the power of number 
            power = 1; 
 
            console.log("Powers of " + userinput + " that are less than 2^" +userinput);
            while (parse <= userinput) //checks wheather parse is less than the userinput
            {
                console.log("2^"+parse+" = " + power); // 
                power = power * 2; //save the value in power and multiply  by 2
                parse++; // after each loop increment parse
            }
        },

 /*****************************************************************************
*@description This code prints the Nth harmonic number: 1/1 + 1/2 + ... + 1/N
*@param userInput The Harmonic Value N is taken as input  
*/
    harmonic : function(userInput)
        {
            var sum=0;
            for(var i=1;i<=userInput;i++)
            {
                sum = sum +( 1/i ); // compute sum 1 + 1/2 + 1/3 + ... + 1/userInput
            }
            console.log("The value of the nth harmonic series " + sum);
        },

/******************************************************************************
*@description Computes the prime factorization of N using brute force.
*@param userInput holds the number taken by the user
*/
        factors : function(userinput)
        {
            function isPrime(num) //num holds the userinout
            {
                if (num === 1)
                {         
                  return false;
                }
                    else if (num === 2)
                    {
                        return true;  
                    }
                        else{
                        for (var x = 2; x < n; x ++) 
                        {
                            if (num % x === 0){ //condition to check wheather the number is prime 
                            return false;
                            }
                        }
                return true;
                }
            }
                 var primeFac = []; //an empty is created
                for (var x = 0; x <= userinput; x++){ // repeats until it finds all the factors of the element entered
                    if (userinput % x === 0 && isPrime(x) === true){ //checks for prime factors
                        primeFac.push(x); //the primefactors are pushes to an array
                }
                }
                console.log(`${primeFac}`); 
        },

/***************************************************************************************
*@description This code simulates a gambler who start with $stake and place fair $1 bets until
he/she goes broke (i.e. has no money) or reach $goal.
*@param userInput holds the stake amount
*@param amount holds the number of bets he/she makes.
*@param goal holds the amount to achieve
*/
    gambling: function(userInput, amount, goal)
        {
        var goal,amount, win=0;loss=0; //win, loss to keep track each time
        //checks if the condition if the gambler losses the game or reaches his goal
            while (amount!=0 && amount<= goal && userInput > 0)
                {   
                 if(Math.random()> 0.5){
                    console.log("won");
                    win++;
                    amount++;
                    }
                    else
                    {
                        console.log("loss");
                        loss++
                        amount--;
                    }
                }
                console.log("Total number of losses are " + loss)
                console.log("Total number of wins " + win)
                console.log("Number of times he has won" +win + " Won percentage is " +(win/userInput)*100 + " %"); 
                console.log("Number of times he has lost:" +loss + "Loss percentage is "+(loss/userInput)*100 + " %"); 
                
    },

 /*****************************************************************************
*@description To generate N distinct random coupon numbers
*@param userInput min which holds the least value in the given range
*@param userInput max which holds the highest value in the given range
*/ 
        coupon: function (min, max) {
            var random = [], count, ele; 
    
            for (count = parseInt(min); count < parseInt(max); count++) { //to parse random numbers in the range 
                ele = _.random(parseInt( min), parseInt( max));
                random.push(ele); // the numbers generated, are stored in array random 
    
            }
            console.log(random);
            console.log("No of coupouns generated = " + random.length);
            var userSet = new Set(random); //random gernerated numbers are stored in the set
            var distinct=[];
            distinct=Array.from(userSet) //distinct random numbers are stored in distinct array
            console.log("Different generated are "+distinct)
            console.log("No of distinct coupons= " + distinct.length);
        },
        
/****************************************************************************************
*@description To print the Euclidean distance (x,y) to the origin
*/
        distance : function(x , y)
        {
            var x , y , result = Math.sqrt(Math.pow(x,2) + Math.pow(y,2)); //evaluates the equation
            console.log("The Euclidean distance between " + x + " and " + y + " is :" + result );
        },
    
/******************************************************************************************* 
*@description Stopwatch code for measuring the time that elapses between the start and end clicks
*/
    getTime : function() {
        var date = new Date(); //object creation
        var n = date.getTime(); // takes the current system time
        return n;
    },

/*@param initial getTime of the system
*@param final getTime of the system
*/
    ellapsed : function(initialTime, finalTime)
        {
            var result = (finalTime - initialTime)/1000; // evaluates the result
            return result;
        },
   
/* Any other program for stop watch usingelse { inbuilt function
    var Stopwatch = require("node-stopwatch")                    console.log("cannot play").Stopwatch;
    var stopwatch = Stopwatch.create();
    var s = 1;
    if(userInput == s)
        {
            topwatch.start();      //start the stop watch
        console.log("ticks: " + stopwatch.elapsedTicks);
        console.log("milliseconds: " + stopwatch.elapsedMilliseconds);
        console.log("seconds: " + stopwatch.elapsed.seconds);
        console.log("minutes: " + stopwatch.elapsed.minutes);
        console.log("hours: " + stopwatch.elapsed.hours);
        stopwatch.stop();  //stop the stopwatch
        }
            else
            {
                console.log("press the valid key");
            }
*/
    
/******************************************************************************
*@description Quadratic to find the roots of the equation
*@param a,b,c as declarations from the user
*/
    quadratic : function(a , b , c)
       {
         var delta, root1, root2, realPart;
        delta = b*b - 4*a*c  //evalutes the equation
        console.log('Delta value is :' +delta)
        if(delta > 0) // if delta value is greater than zero
            {
                root1  = -b + Math.sqrt(delta)/(2*a)
                root2  = -b - Math.sqrt(delta)/(2*a)
                console.log("The root1 of x is " +root1);
                console.log("The root2 of x is " +root2);
            }
        if(delta ==0)  // if delta is equal to zero
            {
                root1 = -b / (2*a)
                root2 = -b/ (2*a)
                console.log("The root1 of x is " +root1);
                console.log("The root2 of x is " +root2);
            }
        if(delta < 0) //if delta is less than zero
            {
                realPart = -b / (2*a); //to find realpart  of x
                imaginaryPart =Math.sqrt(-delta)/(2*a) //to find imaginary part of x
                console.log("The realPart  of x is " +realPart);
                console.log("The imaginaryPart of x is " +imaginaryPart);
            }     
       },

/**
*@description  To calculate the temparature
*@param temp which holds the temperature entered by the user
*@param speed which holds the wind speed entered by the user
 */
windChill : function(temp, speed)
    {
        if(temp < 50 && speed < 120 && speed > 3)
           { 
               //formua to calculate windSSSS
           var wind = (35.74 + 0.6215 * temp + (0.4275 * temp - 35.75) )*Math.pow(speed , 0.16)
           console.log("The effective temperature temperature is : " + wind)
           }
                else 
                {
                    console.log("Enter the correct range of temperarure and windspeed");
                }
       },

/****************************************************************************************
*@description To print an array from the user.
*@param row take the number of rows from the user
*/
       array : function(row)
       {
           var arr = new Array(row); //creation of an array
           var prompt = require('prompt-sync')();
           var column = prompt("Enter number of columns :");
           for(var i =0;i<row;i++)
           {
               arr[i]=new Array(column); //number of columns are stored in array
               for(var j = 0; j<column;j++)
            {
                arr [i][j] = prompt ("Enter the elements of the array :");
            }            
       }
       console.log(arr);
    },

/****************************************************************************************
**@description N integers to counts the number of triples that sum to exactly 0.
*@param row holds the number of elements 
*/
    triplets : function(row)
    {
        var prompt = require('prompt-sync')();
        var arr = new Array(row); //creation of an array where row value are inserted
        var array1 = new Array(); //creation of an array
        var mainarr = new Array();
        for(var index = 0; index < row; index ++) //checking the condition
        {
            arr[index] = prompt("Enter the elements ");
        }
        //checks the conditions of loops
             for(var i =0; i<(arr.length -2); i++)
            {
                for (var j= i+1; j<(arr.length-1); j++)
                 {
                    for (var k = j+1; k <(arr.length); k++)
                    {
                        var sum = Number(arr[i]) + Number (arr [j]) + Number (arr [k]);
                            if(sum == 0)
                            {
                                array1.push(+arr[i] +" ," +arr[j] +" ," +arr[k])
                                mainarr.push( array1 );
                                console.log("The triplets are : " +arr[i]+","+arr[j]+","+arr[k]);
                                
                            }              
                         }
                    }
                }
            var unique = [];    //creation of an empty array 
            function removeDuplicates(arr) //random values stored in array is passed to arr
            { 
                for(var i =0;i<arr.length;i++){ 
                        if(unique.indexOf(arr[i]) == -1){ //removes duplicates
                        unique.push (arr[i]); // push the unique elements to the array
                        }
                        else 
                        {
                            console.log("Triplets not found")
                        }
                        
                    return unique; //return the array with sorted unique 
                }
                 console.log(removeDuplicates(array1))
                } 
                if(unique.length ==0) // checks if the sum of integers are zero
                {
                  console.log("No triplets!!");
                }         
            },
/*******************************************************************************************
*@description  To return an permutation of a string 
*@param str to enter an userinput string
*@param firstIndex to parse an string given as input
*@param laststIndex to parse an string given as input
*/
permute : function(str, firstIndex , lastIndex)
    {
        if(lastIndex === firstIndex) //checks for the condition in equality
        {
            console.log(str.join(''))
        }
        else
        {
            for(var i = firstIndex ; i <=lastIndex ; i++)
                {
                     this.swap(str , firstIndex , i) //calling swap method to parse
                     // console.log( str)
                     this.permute(str , firstIndex+1, lastIndex) //recurssively calling itself
                     // console.log( str)
                     this.swap(str , i , firstIndex) //calling swap method
                     // console.log( str)
                       
                }    
        }       
    },
    swap :function(str , i, j)
        {
            var temp; 
            temp = str[i]; //initial swap and store the value in temp
            str[i] = str[j]; //swap j value and store the value in i
            str[j] = temp; // store the value in j 
            return str;           
         },
     /**
        * @description  userInput variable stores the number entered by the user as the input.
         */
        


    }


                    











    


    

    

