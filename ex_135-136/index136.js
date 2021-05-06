/*Exercise 136
Create a new index136.js file
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
The objective is to create a string value with Iceman, Logan and Phoenix
To create the string you need to get the names while iterating the mutants array
Once the iteration is over show the generated string with the selected mutants names
*/



var mutants=['Professor X','Cyclops','Iceman','Angel','Magneto','Beast','Phoenix','Logan','Gambit'];
let indexIceman,indexLogan,indexPhoenix;
mutants.forEach(function(hero,index){
    console.log(hero);
    if(hero=='Iceman'){
        indexIceman=index;
    }else if(hero=='Logan'){
        indexLogan=index;
    }else if(hero=='Phoenix'){
        indexPhoenix=index;
    }
})
let result=mutants[indexIceman]+mutants[indexLogan]+mutants[indexPhoenix];
// console.log(mutants[indexIceman],mutants[indexLogan],mutants[indexPhoenix]);
console.log(result);