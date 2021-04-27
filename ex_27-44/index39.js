/*Exercise 39
Create a new index39.js file
Define a firstName variable and assign your name as it's value
Define a lastName variable and assign your last name as it's value
Show the following output:
My first name is %firstName% and it is %nameCharacters% characters long
My last name is %lastName% and it is %lastNameCharacters% characters long
The character difference between my first name and last name is %charsDiff%
My first name is longer than my last name: true or false
*/


var firstName="Ethan",lastName="Cheng";
let nameCharacters=firstName.length,lastNameCharacters=lastName.length;
let charsDiff=nameCharacters-lastNameCharacters;
console.log("My first name is "+firstName+" and it is "+nameCharacters+" characters long");
console.log("My last name is "+lastName+" and it is "+lastNameCharacters+" characters long");
console.log("The character difference between my first name and last name is "+charsDiff);
console.log("My first name is longer than my last name: "+(nameCharacters>lastNameCharacters));

// My first name is Ethan and it is 5 characters long
// My last name is Cheng and it is 5 characters long
// The character difference between my first name and last name is 0
// My first name is longer than my last name: false