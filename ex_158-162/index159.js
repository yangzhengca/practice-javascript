/*Exercise 159
Create a new index159.js
Define a jeep variable and assign a literal object
Add the object a brand property and assign the following string value: Jeep Wrangler
Add the object a price property and assign the following numeric value: 34000
Show the following message as output using object dynamic properties (use variables or string literals)
The %brand% is $ %price%
*/


var jeep={
    brand:'Jeep Wrangler',
    price:'34000'
};
console.log('The '+jeep['brand']+' is $ '+jeep['price']);

// The Jeep Wrangler is $ 34000