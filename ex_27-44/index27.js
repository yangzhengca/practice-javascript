/*Exercise 27
Create a new index27.js file

Define a firstNumber and secondNumber variables

Assign each variable a number type value

Code the following operations:

Adding both variables
Subtracting both variables
Multiplying both variables
Dividing both variables
Remainder from both variables
For each operation show the following output:

Example: I add 2 + 3 and the result is 5 (where 2 and 3 are firstNumber and secondNumber and 5 it's the operation result)
Use a template variable for each output and console.log()
*/

var firstNumber,secondNumber;
firstNumber=1;
secondNumber=2;

let resultAdd=firstNumber+secondNumber;
let resultAddPrint="I add "+ firstNumber+ " + " +secondNumber+" and the result is "+resultAdd;
console.log(resultAddPrint);//I add 1 + 2 and the result is 3

let resultSub=firstNumber-secondNumber;
let resultSubPrint="II subtract "+ firstNumber+ " - " +secondNumber+" and the result is "+resultSub;
console.log(resultSubPrint);//II subtract 1 - 2 and the result is -1

let resultMul=firstNumber*secondNumber;
let resultMulPrint="III multiple "+ firstNumber+ " * " +secondNumber+" and the result is "+resultMul;
console.log(resultMulPrint);//III multiple 1 * 2 and the result is 2

let resultDiv=firstNumber/secondNumber;
let resultDivPrint="IV divide "+ firstNumber+ " / " +secondNumber+" and the result is "+resultDiv;
console.log(resultDivPrint);//IV divide 1 / 2 and the result is 0.5

let resultRem=firstNumber%secondNumber;
let resultRemPrint="V remainder "+ firstNumber+ " % " +secondNumber+" and the result is "+resultRem;
console.log(resultRemPrint);//V remainder 1 % 2 and the result is 1