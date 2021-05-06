/*Exercise 133
Create a new index133.js file
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
First part
Iterate over the mutants items
Show each mutant name
Break the execution in case Magneto is part of the mutants list
Second part
Fin out Magneto position and remove it from the mutants array
Iterate over the array without Magento on it and show each mutant name in upper case and the item position
*/


var mutants=['Professor X','Cyclops','Iceman','Angel','Magneto','Beast','Phoenix','Logan','Gambit'];

/*
for(let i=0;i<mutants.length;i++){
    console.log(mutants[i]);
    if(mutants[i]=='Magneto'){
        break;
    }
}

// Professor X
// Cyclops
// Iceman
// Angel
// Magneto

*/


let position=mutants.indexOf('Magneto');
for(let j=position;j<mutants.length;j++){
    mutants[j]=mutants[j+1];
}
mutants.pop();
for(let k=0;k<mutants.length;k++){
    console.log(mutants[k].toUpperCase(),k);
}

// PROFESSOR X 0
// CYCLOPS 1
// ICEMAN 2
// ANGEL 3
// BEAST 4
// PHOENIX 5
// LOGAN 6
// GAMBIT 7