/*Exercise 132
Create a new index132.js file
Define a mutants array with the following values:
Professor X
Cyclops
Iceman
Angel
Beast
Phoenix
Logan
Show the following message only if Logan and Professor X are mutants items:
We love X-Men
Show the following message only if Gambit is not a mutants items:
X-Men sucks
*/

var mutants=['Professor X','Cyclops','Iceman','Angel','Beast',  'Phoenix','Logan'];

if(typeof mutants.indexOf('Logan')=='number' && typeof mutants.indexOf('Professor X')=='number'){
    console.log('We love X-Men');
}
if(typeof mutants.indexOf('Gambit')!=='number'){
    console.log('X-Men sucks');
}


// We love X-Men