/*Exercise 135
Create a new index135.js file
Define a mutants array and assign the following values
Professor X
Cyclops
Iceman
Angel
Magneto
Beast
Phoenix
Logan
Gambit
Iterate over each mutants item using forEach
Show the mutant name and position
*/


var mutants=['Professor X','Cyclops','Iceman','Angel','Magneto','Beast','Phoenix','Logan','Gambit'];
mutants.forEach(function(hero,index){
    console.log(hero);
    console.log('Position :',index);
});

// Professor X
// Position : 0
// Cyclops
// Position : 1
// Iceman
// Position : 2
// Angel
// Position : 3
// Magneto
// Position : 4
// Beast
// Position : 5
// Phoenix
// Position : 6
// Logan
// Position : 7
// Gambit
// Position : 8