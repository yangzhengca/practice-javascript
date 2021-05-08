/*Exercise 160
Create a new index160.js
Define a propertiesNames array and assign the following string values: name, price, sold & console
Copy and paste the games array from exercise 155
Iterate over the games array
Show each game properties value using the properties names defined in the propertiesNames array
Use the propertiesNames as dynamic properties accesor for the games array
*/


var propertiesNames=['name','price','sold','console'];
var games=[];
games=[{
    name:'Crash Bandicoot N. Sane Trilogy',
    price:1060,
    sold:20,
    console:'PS4'
    },
    {
        name:'Lego Marvel Super Heroes',
        price:700,
        sold:25,
        console:'XBOX'
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
for(let i=0;i<games.length;i++){
console.log(games[i][propertiesNames[0]]);
}

for(let i=0;i<games.length;i++){
    console.log(games[i][propertiesNames[1]]);
}

for(let i=0;i<games.length;i++){
    console.log(games[i][propertiesNames[2]]);
}

for(let i=0;i<games.length;i++){
    console.log(games[i][propertiesNames[3]]);
}


// Crash Bandicoot N. Sane Trilogy
// Lego Marvel Super Heroes
// Gta V
// Mortal Kombat Xl
// Gta V
// Fifa 2017
// Uncharted 4
// Mortal Kombat Xl
// Need For Speed
// Lego Batman
// Fifa 17
// Resident Evil 7
// Dragon Ball XX
// 1060
// 700
// 1449
// 1190
// 1250
// 890
// 950
// 940
// 790
// 1000
// 1290
// 1390
// 1390
// 20
// 25
// 30
// 34
// 60
// 15
// 30
// 30
// 10
// 18
// 12
// 10
// 25
// PS4
// XBOX
// PS4
// PS4
// XBOX
// PS4
// PS4
// XBOX
// PS4
// PS4
// PS4
// PS4
// XBOX