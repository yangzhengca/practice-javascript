/*Exercise 28
Create a new index28.js file
Define a number variabe and assign the following value: 9
Using the number variable show the multiplication table from 1 to 10
Example: 9 times 1 equals 9
Use string concatenation for each output and console.log()
*/


var myNumber=9;

// for loop
for (var i = 1; i < 11; i++) 
{
    let myResult=myNumber*i;
    console.log(myNumber+" times "+i+" equals "+myResult);
};

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