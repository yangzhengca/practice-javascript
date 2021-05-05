/*Exercise 127
Create a new index127.js file
Define a iceCreamFlavors array with 10 flavors
Remove the first 2 elements using shift
Show the iceCreamFlavors items as output
Show each removed flavor
*/
//use flower names instead of ice cream names

var iceCreamFlavors=['Rose','Lily','Tulip','Orchid','Carnation','Hyacinth','Peruvian Lily','Chrysanthemum','Aconitum','Amaryllis'];
console.log(iceCreamFlavors[0]);
let favFlower=iceCreamFlavors.shift();
console.log(iceCreamFlavors[0]);
favFlower=iceCreamFlavors.shift();
console.log(iceCreamFlavors);


// Rose
// Lily
// [
//   'Tulip',
//   'Orchid',
//   'Carnation',
//   'Hyacinth',
//   'Peruvian Lily',
//   'Chrysanthemum',
//   'Aconitum',
//   'Amaryllis'
// ]