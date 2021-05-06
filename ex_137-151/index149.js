/*Exercise 149
Create a new index149.js
Define a user variable and assign a literal object as value
This user will have your personal data
Add at least 10 properties and values to describe you
Try using the following type values as properties values: string, number, boolean, array & object (yes, you can assign a literal object as property too)
Define at least 5 properties when we initialize the user object:
const myObject = {
  property: value,
  property: value,
}
Define the rest of the user properties using the dynamic way
const myObject = {
  property: value,
  property: value,
}

myObject.newProperty = value;
myObject.newProperty = value;
myObject.newProperty = value;
Show the user object as output
*/

var user={firstname:'Ethan',lastname:'Hunt',age:35,address:'somewhere',class:'AAA'};
user.films=['Mission: Impossible','Mission: Impossible 2','Mission: Impossible III','Mission: Impossible – Ghost Protocol','Mission: Impossible – Rogue Nation','Mission: Impossible – Fallout','Mission: Impossible 7 ']
user.street='Regina Ave';
user.islive=true;
user.color='black';
user.isfemale=false;

console.log(user);


// {
//     firstname: 'Ethan',
//     lastname: 'Hunt',
//     age: 35,
//     address: 'somewhere',
//     class: 'AAA',
//     films: [
//       'Mission: Impossible',
//       'Mission: Impossible 2',
//       'Mission: Impossible III',
//       'Mission: Impossible – Ghost Protocol',
//       'Mission: Impossible – Rogue Nation',
//       'Mission: Impossible – Fallout',
//       'Mission: Impossible 7 '
//     ],
//     street: 'Regina Ave',
//     islive: true,
//     color: 'black',
//     isfemale: false
//   }
