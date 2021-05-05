/*Exercise 93
Create a new index93.js file
Copy and paste the code from exercise 83
Refactor the code to use for instead of do/while
*/


/*Exercise 73
Create a new index73.js file
Show the following output using while:
*************
************
***********
**********
*********
********
*******
******
*****
****
***
**
*
var i=13,stars="*************";
var result;
while(i>0){
    result=stars.substr(0,i);
    console.log(result);
    i--;
}
*/
/*
var i=13,stars="*************";
var result;
do{
    result=stars.substr(0,i);
    console.log(result);
    i--;
}while(i>0)
*/

var stars="*************";
var result;
for(let i=13;i>0;i--){
    result=stars.substr(0,i);
    console.log(result);    
}

// *************
// ************
// ***********
// **********
// *********
// ********
// *******
// ******
// *****
// ****
// ***
// **
// *