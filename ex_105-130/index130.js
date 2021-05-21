/*Exercise 130
Create a new index130.js file
Define a mutants array with the following values:
Professor X
Cyclops
Iceman
Angel
Beast
Phoenix
Sort the list
Reverse the sorted list
Join all mutants name using the following text: '* '
Show the following output:
Original mutants list
Sorted mutants list
Reversed mutants list
Mutants name separated by *
*/

var mutants=['Professor X','Cyclops','Iceman','Angel','Beast','Phoenix'];
console.log(mutants.join('*'));
var sortMutants=mutants.sort();
console.log(mutants.join('*'));
var reverseMutants=mutants.reverse();
console.log(mutants.join('*'));

//note:array.sort() and array.reverse() change the original array

// Professor X*Cyclops*Iceman*Angel*Beast*Phoenix
// Angel*Beast*Cyclops*Iceman*Phoenix*Professor X
// Professor X*Phoenix*Iceman*Cyclops*Beast*Angel

