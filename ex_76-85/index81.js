/*Exercise 81
Create a new index81.js file
Copy and paste the code from exercise 71
Refactor the code to use do/while instead of while
*/


  
/*Exercise 71
Create a new index71.js file
Show the 9 times table from 1 to 10 using while (example 9 times 1 equals 1)


var i=1,result;

while(i<11){
    result=9*i;
    console.log(`9 times ${i} equals ${result}`);
    i++;
}

*/

var i=1,result;

do{
    result=9*i;
    console.log(`9 times ${i} equals ${result}`);
    i++;
}while(i<11){}


// 9 times 1 equals 9
// 9 times 2 equals 18
// 9 times 3 equals 27
// 9 times 4 equals 36
// 9 times 5 equals 45
// 9 times 6 equals 54
// 9 times 7 equals 63
// 9 times 8 equals 72
// 9 times 9 equals 81
// 9 times 10 equals 90