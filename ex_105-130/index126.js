/*Exercise 126
Create a new index126.js file
Define a iceCreamFlavors array
Add 10 flavors that you like one by one using the unshift method
Show the iceCreamFlavors items as output
*/

//use flower names instead of ice cream names

var iceCreamFlavors=[];
let favFlower=iceCreamFlavors.unshift('Rose');
favFlower=iceCreamFlavors.unshift('Lily');
favFlower=iceCreamFlavors.unshift('Tulip');
favFlower=iceCreamFlavors.unshift('Orchid');
favFlower=iceCreamFlavors.unshift('Carnation');
favFlower=iceCreamFlavors.unshift('Hyacinth');
favFlower=iceCreamFlavors.unshift('Peruvian Lily');
favFlower=iceCreamFlavors.unshift('Chrysanthemum');
favFlower=iceCreamFlavors.unshift('Aconitum');
favFlower=iceCreamFlavors.unshift('Amaryllis');

console.log(iceCreamFlavors);

// [
//     'Amaryllis',
//     'Aconitum',
//     'Chrysanthemum',
//     'Peruvian Lily',
//     'Hyacinth',
//     'Carnation',
//     'Orchid',
//     'Tulip',
//     'Lily',
//     'Rose'
//   ]