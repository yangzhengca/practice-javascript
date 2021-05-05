/*Exercise 119
Create a new index119.js file
Define the following array:
const data = [42, true, function() {return 'The meaning of life is: '}];
If the second item from data is true then show the following output using the first and last items from the data array:
The meaning of life is: 42
*/


const data = [42, true, function() {return 'The meaning of life is: '}];
if(data[1]=true){
    let r=data[2];
    console.log(r(),data[0]);
}

// The meaning of life is:  42