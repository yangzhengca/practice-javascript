/*Exercise 56
Create a new index56.js file
Copy and paste the code from exercise 53
Refactor the code so it match the new requirements:*
Replace if/ese statement for a conditional ternary operator
*/


var number=9;
/*if(number%2==0){
    console.log(number+" is an even number")
}
else{
    console.log(number+" is an odd number")
}
*/

// 10 is an even number
// 9 is an odd number


let numberType=(number%2==0)?'even':'odd';
console.log(number+' is an '+numberType+' number');

// 10 is an even number
// 9 is an odd number