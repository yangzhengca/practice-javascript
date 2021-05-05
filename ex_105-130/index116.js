/*Exercise 116
Create a new index116.js file
Define the getHexaColor function that accepts one of the following web colors as parameter:
white
black
blue
green
yellow
pink
This function returns the hexa color for the given parameter color:
param: white, return value: #FFFFFF
param: black, return value: #000000
param: blue, return value: #0b24fb
param: green, return value: #0e7e12
param: yellow, return value: #fffd38
param: pink, return value: #fec1cc
The returned value must be a string
Call the function using each posible value as parameter
Show each hexa color as output
*/

function getHexaColor(colors) {
    if(colors=="white"){
        return '#FFFFFF';
    }else if(colors=="black"){
        return '#000000';
    }else if(colors=="blue"){
        return '#0b24fb';
    }else if(colors=="green"){
        return '#0e7e12';
    }else if(colors=="yellow"){
        return '#fffd38';
    }else if(colors=="pink"){
        return '#fec1cc';
    }else{
        return 'Please choose a color from: white, black, blue, green, yellow, and pink. '
    }
}
var result;
result=getHexaColor('white');
console.log(result);
result=getHexaColor('black');
console.log(result);
result=getHexaColor('blue');
console.log(result);
result=getHexaColor('green');
console.log(result);
result=getHexaColor('yellow');
console.log(result);
result=getHexaColor('yellow');
console.log(result);
result=getHexaColor('gray');
console.log(result);


// #FFFFFF
// #000000
// #0b24fb
// #0e7e12
// #fffd38
// #fffd38
// Please choose a color from: white, black, blue, green, yellow, and pink.