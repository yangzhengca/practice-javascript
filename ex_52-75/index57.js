/*Exercise 57
Create a new index57.js file
Copy and paste the code from exercise 54
Refactor the code so it match the new requirements:*
Replace if/ese statement for a conditional ternary operator
*/


var username="pepe2017";
var password="12345";
/*if(username=="pepe2017" && password=="12345"){
    console.log('Logged in user, show user home page')
}
else{
    console.log('Sorry, there has been a problem, please try it again.')
}
// Logged in user, show user home page
// Sorry, there has been a problem, please try it again.
*/



let message=(username=="pepe2017" && password=="12345")?'Logged in user, show user home page':'Sorry, there has been a problem, please try it again.';
console.log(message);

// Logged in user, show user home page
// Sorry, there has been a problem, please try it again.