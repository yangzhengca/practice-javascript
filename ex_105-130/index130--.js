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
var sortMutants=mutants.sort();//??????
var reverseMutants=mutants.reverse();//??????
console.log(mutants);
console.log(sortMutants);
console.log(reverseMutants);
let sepMutants='';
for(let i=0;i<mutants.length;i++){
    sepMutants=sepMutants+mutants[i]+'*';
}
sepMutants=sepMutants.substr(0,sepMutants.length-1);
console.log(sepMutants);


// [ 'Professor X', 'Phoenix', 'Iceman', 'Cyclops', 'Beast', 'Angel' ]
// [ 'Professor X', 'Phoenix', 'Iceman', 'Cyclops', 'Beast', 'Angel' ]
// [ 'Professor X', 'Phoenix', 'Iceman', 'Cyclops', 'Beast', 'Angel' ]
// Professor X*Phoenix*Iceman*Cyclops*Beast*Angel*