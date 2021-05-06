/*Exercise 138
Create a new index138.js file
Define a mutants array with the following values:
Professor X
Cyclops
Iceman
Angel
Magneto
Beast
Phoenix
Logan
Gambit
Iterate over the mutants array
Add <3 symbol before the mutant name if the iterated name is one of the following:
Professor X
Logan
Phoenix
Gambit
Show the original mutant array items as output
Show the updated mutant array items as output
*/



var mutants=['Professor X','Cyclops','Iceman','Angel','Magneto','Beast','Phoenix','Logan','Gambit'];
console.log(mutants);
var mutantsModify=mutants.map(function(hero){
    if(hero=='Professor X' || hero=='Logan' || hero=='Phoenix' ||hero=='Gambit'){
        return hero=hero+'<3';
    }else{
        return hero;
    }
})
console.log(mutantsModify);


// [
//     'Professor X', 'Cyclops',
//     'Iceman',      'Angel',
//     'Magneto',     'Beast',
//     'Phoenix',     'Logan',
//     'Gambit'
//   ]
//   [
//     'Professor X<3',
//     'Cyclops',
//     'Iceman',
//     'Angel',
//     'Magneto',
//     'Beast',
//     'Phoenix<3',
//     'Logan<3',
//     'Gambit<3'
//   ]