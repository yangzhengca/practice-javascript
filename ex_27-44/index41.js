/*Exercise 41
Create a new index41.js file
Define a text1 variable and assign the following value: HELLO
Define a text2 variable and assign the following value: javascript
Define a text3 variable and assign the following value: WORLD
Show the following output: hello JAVASCRIPT world
Use console.log() & concat
*/



var text1="HELLO",text2="javascript",text3="WORLD";
let text11=text1.toLowerCase(),text22=text2.toUpperCase(),text33=text3.toLowerCase();

console.log(text11.concat(' '+text22+' '+text33));
// hello JAVASCRIPT world