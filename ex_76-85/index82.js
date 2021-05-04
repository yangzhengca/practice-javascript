/*Exercise 82
Create a new index82.js file
Copy and paste the code from exercise 72
Refactor the code to use do/while instead of while
*/

/*Exercise 72
Create a new index72.js file
Show the following output using while:
*
**
***
****
*****
******
*******
********
*********
**********
***********
************
*************





var i=1,stars='';
while(i<14){
    stars=stars+'*';
    console.log(stars);
    i++;
}

*/

var i=1,stars='';
do{
    stars=stars+'*';
    console.log(stars);
    i++;
}while(i<14){}



// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********
// ***********
// ************
// *************