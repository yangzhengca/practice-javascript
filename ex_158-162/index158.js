/*Exercise 158
Create a new index158.js
Copy and paste the code from the previous exercise ()
Refactor the code to match new requirements
Define a budget variable
Add all PS4 games price and assign it to the budget variable
Show the following message as output:
I need %budget% CAD to get all this PS$ great games!!
Define a new gameNames array and assign all the games names (all strings)
Define a new gamePrices array and assign all the games prices (all numbers)
Show the gameNames items as output
Show the gamePrices items as output
*/


var consoles='PS4';
var games=[];
games=[{
        name: 'Crash Bandicoot N. Sane Trilogy',
        price: 1060,
        sold: 20,
        console: 'PS4'
    },
    {
        name: 'Lego Marvel Super Heroes',
        price: 700,
        sold: 25,
        console: 'XBOX'
    },
    {
        name: 'Gta V',
        price: 1449,
        sold: 30,
        console: 'PS4'    
    },
    {
        name: 'Mortal Kombat Xl',
        price: 1190,
        sold: 34,
        console: 'PS4'
    },
    {
        name: 'Gta V',
        price: 1250,
        sold: 60,
        console: 'XBOX'
    },
    {
        name: 'Fifa 2017',
        price: 890,
        sold: 15,
        console: 'PS4'
    },
    {
        name: 'Uncharted 4',
        price: 950,
        sold: 30,
        console: 'PS4'
    },
    {
        name: 'Mortal Kombat Xl',
        price: 940,
        sold: 30,
        console: 'XBOX'
    },
    {
        name: 'Need For Speed',
        price: 790,
        sold: 10,
        console: 'PS4'
    },
    {
        name: 'Lego Batman',
        price: 1000,
        sold: 18,
        console: 'PS4'
    },
    {
        name: 'Fifa 17',
        price: 1290,
        sold: 12,
        console: 'PS4'
    },
    {
        name: 'Resident Evil 7',
        price: 1390,
        sold: 10,
        console: 'PS4'
    },
    {
        name: 'Dragon Ball XX',
        price: 1390,
        sold: 25,
        console: 'XBOX'
    }
];

var gamesPs4=games.filter(function(array1){
    return array1.console===consoles;  
});

// console.log(gamesPs4);

var budget;
for(let i=0;i<gamesPs4.length;i++){
    budget=gamesPs4[i].price;
}
console.log('I need '+budget+' CAD to get all this PS$ great games!!');

// I need 1390 CAD to get all this PS$ great games!!

var gameNames=[];
for(let j=0;j<games.length;j++){
    let totalNames=gameNames.push(games[j].name);
}
console.log(gameNames);

// [
//     'Crash Bandicoot N. Sane Trilogy',
//     'Lego Marvel Super Heroes',
//     'Gta V',
//     'Mortal Kombat Xl',
//     'Gta V',
//     'Fifa 2017',
//     'Uncharted 4',
//     'Mortal Kombat Xl',
//     'Need For Speed',
//     'Lego Batman',
//     'Fifa 17',
//     'Resident Evil 7',
//     'Dragon Ball XX'
//   ]

var gamePrices=[];
for(let k=0;k<games.length;k++){
    let totalPrices=gamePrices.push(games[k].price);
}
console.log(gamePrices);

// [
//     1060,  700, 1449, 1190,
//     1250,  890,  950,  940,
//      790, 1000, 1290, 1390,
//     1390
//   ]