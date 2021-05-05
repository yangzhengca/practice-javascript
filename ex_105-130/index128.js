/*Exercise 128
Create a new index128.js file
Define a iceCreamFlavors array with 10 flavors
Remove the last 4 elements using pop
Show the iceCreamFlavors items as output
Show each removed flavor
*/
//use flower names instead of ice cream names


var iceCreamFlavors=['Rose','Lily','Tulip','Orchid','Carnation','Hyacinth','Peruvian Lily','Chrysanthemum','Aconitum','Amaryllis'];
console.log(iceCreamFlavors[iceCreamFlavors.length-1])
let favFlower=iceCreamFlavors.pop();

console.log(iceCreamFlavors[iceCreamFlavors.length-1])
favFlower=iceCreamFlavors.pop();

console.log(iceCreamFlavors[iceCreamFlavors.length-1])
favFlower=iceCreamFlavors.pop();

console.log(iceCreamFlavors[iceCreamFlavors.length-1])
favFlower=iceCreamFlavors.pop();

console.log(iceCreamFlavors);


// Amaryllis
// Aconitum
// Chrysanthemum
// Peruvian Lily
// [ 'Rose', 'Lily', 'Tulip', 'Orchid', 'Carnation', 'Hyacinth' ]