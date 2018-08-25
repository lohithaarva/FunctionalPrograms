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
              headCount++; //if yes increment headCount 
            }
            else
            {
              tailCount ++; //else if not increment tailCount
            }
        }
          console.log("Times head was flipped:" + headCount + " Percentage of head is " +(headCount/userInput)*100 + "%"); 
          console.log("Times tail was flipped:" + tailCount + " Percentage of head is " +(tailCount/userInput)*100 + "%"); 
    
        },
        leapYear : function(userinput)
        {
            var year = userinput;
            if(year % 4 == 0 && year % 100 !=0 || year % 400 ==0)
            {
                console.log("It's a leap year");
            }
            else
            {
                console.log("It's not a leap year");
            } 
        },

        powerOfTwo : function(userinput)
        {   
            var number = userinput,
            i = 0,
            power = 1;
 
            console.log("Powers of " + userinput + " that are less than 2^" +userinput);
            while (i <= userinput)
            {
                console.log("2^"+i+" = " + power);
                power = power * 2;
                i++;
            }
        },

        Harmonic : function(userinput)
        {
            var i;
            var sum=0;
            for(i=1;i<=userinput;i++)
            {
            sum=sum+1/i;
            }
           console.log("The harmonic series are : " +sum);
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
            var rangeMin, rangeMax ;
            for (var i = 0; i < rangeMax; i++)
            {
                console.log(Math.random(rangeMin , rangeMax))
            }    

    },

}