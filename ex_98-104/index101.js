/*Exercise 101
Create a new index101.js file
Define a function named showUser that will output the following data:
Your name
Your age
Your phone number
Your street
Your postal code
If you're married or not (boolean)
*/


function showUser() {
    let myName='Ethan',myAge=7,myNumber="306-000-0000",myStreet='Regina Ave',myPostCode="S4M 5A6",isMarried=false;
    console.log('My name is '+myName);
    console.log('My age is '+myAge);
    console.log('My phone number is '+myNumber);
    console.log('My street is '+myStreet);
    console.log('My postal code is '+myPostCode);
    console.log('Am I married '+myPostCode);
}

showUser();