var prompt = require('prompt-sync')();
var utility = require('../Utility/utility.js');
function triplets()
{
  
    var row = prompt("Enter the size  : ")
   utility.triplets(row);
   
}
triplets();
