/*Exercise 35
Create a new index35.js file
Define the clientId variable and assign the following value: 143245
Define the inputClientId variable and assign the following value: '143245'
Show as output if the input client id is the same as the client id value (use comparison by value)
Example: The input client id is correct by value? true or false
Show as output if the input client id is the same as the client id value (use comparison by value & type)
Example: The input client id is correct by value and type? true or false
*/


var clientId=143245,inputClientId='143245';
let comparisonByValue=clientId == inputClientId;
let comparisonByValueAndType=clientId === inputClientId;
console.log("The input client id is correct by value? "+comparisonByValue);
console.log("The input client id is correct by value and type? "+comparisonByValueAndType);

// The input client id is correct by value? true
// The input client id is correct by value and type? false