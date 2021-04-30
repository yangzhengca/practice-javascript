/*Exercise 64
Create a new index64.js file
Define the name variable and assign a null value
If the name variable is truthy then show the following message as output: Your name is %name%
If the name variable is falsy then show the following message: Please input a valid name
Now assign your name to the name variable and run the code again
For yourself try to explain what's going on?
*/


var theName=null;//name--> theName 
if(theName){
    console.log(`Your name is ${theName}`);
}
else{
    console.log('Please input a valid name')
}

// Please input a valid name
// Your name is Ethan
