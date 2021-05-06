/*Exercise 140
Create a new index140.js file
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
Filter the list using the filter method and remove the following mutants:
Magneto
Iceman
Gambit
Show the filtered list as output
*/

var mutants=['Professor X','Cyclops','Iceman','Angel','Magneto','Beast','Phoenix','Logan','Gambit'];

var mutantsModify=mutants.filter(function(hero){
    if(hero=='Magneto' || hero=='Iceman' || hero=='Gambit'){

    }else{
        return hero;
    }
})
console.log(mutantsModify);

// [ 'Professor X', 'Cyclops', 'Angel', 'Beast', 'Phoenix', 'Logan' ]