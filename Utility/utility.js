module.exports = {
    hello : function(userinput)
    {
        console.log("Hey " + userinput + "! How are you");
    },

     flipCoin : function(userinput)
     {
        var headCount = 0, tailCount = 0, userinput;
        
        for (var i = 0; i < userinput; i++) {
            if(Math.random() > 0.5)
            {
              headCount++;
            }
            else
            {
              tailCount ++;
            }
        }
          console.log("Times head was flipped:" + headCount + " Percentage of head is " +(headCount/userinput)*100); 
          console.log("Times tail was flipped:" + tailCount + " Percentage of head is " +(tailCount/userinput)*100); 
        
        },
        Leapyear : function(userinput)
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

        Poweroftwo : function(userinput)
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
        }

        
        }

    
