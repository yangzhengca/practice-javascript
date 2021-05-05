/*Exercise 114
Create a new index114.js file
Define a revert function that accepts a string parameter
This function shows the reverted text parameter
For example if you call the revert function with 'hello' the function will show: olleh
Call this function using at least 5 different words :)
*/



function revert(word) {
    var rWord='';
    for(let i=word.length-1;i>-2;i--){
        rWord+=word.slice(i,i+1);    
    }
    console.log(rWord); 
}

revert('hello');
revert('node');
revert('HTML');
revert('front end');
revert('full stack');

// olleh
// edon
// LMTH
// dne tnorf
// kcats lluf



