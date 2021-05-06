/*Create a new index142.js
Define a firstPerson variable
Define a secondPerson variable
Assign a new array to each defined variable with the following structure
The first item is the person first name (string)
The second item is the person last name (string)
The third item is the person address (string)
The fourth item is the person age (number)
Use the reduce function over the firstPerson & secondPerson to get a string value back from each of them
Compare the strings result to see if they are the same person (if they are they should match)
Try using the same person (with different variables) and also try different people
*/


var firstPerson,secondPerson;
firstPerson=['Ethan','Hunter','somewhere',35];
secondPerson=['Ethan','Hunter','somewhere',35];
// secondPerson=['Jack','Bauer','somewhere,too',40];
firstPerson=firstPerson.reduce(function(a,b){
    return a+b;
})

secondPerson=secondPerson.reduce(function(a,b){
    return a+b;
})

console.log(firstPerson);
console.log(secondPerson);

if(firstPerson==secondPerson){
    console.log('They are the same person.')
}else{
    console.log('They are not the same person.')
}


// EthanHuntersomewhere35
// JackBauersomewhere,too40
// They are not the same person.


// EthanHuntersomewhere35
// EthanHuntersomewhere35
// They are the same person.