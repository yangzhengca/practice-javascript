/*Exercise 55
Create a new index55.js file
Copy and paste the code from exercise 52
Refactor the code so it match the new requirements:*
Replace if/ese statement for a conditional ternary operator
*/


var firstNumber=10, secondNumber=5;

/*if(firstNumber>secondNumber){
    console.log('Number '+firstNumber+' is bigger than '+secondNumber )
}
else{
    console.log('Number '+secondNumber+' is bigger than '+firstNumber)
}
*/

// Number 10 is bigger than 5
// Number 5 is bigger than 4


let bigNumber=(firstNumber > secondNumber)?firstNumber:secondNumber;
let smallNumber=(firstNumber > secondNumber)?secondNumber:firstNumber;

console.log('Number '+bigNumber+' is bigger than '+smallNumber);

//Number 5 is bigger than 4
//Number 10 is bigger than 5