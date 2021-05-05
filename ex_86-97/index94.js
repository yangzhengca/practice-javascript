/*Exercise 94
Create a new index94.js file
Copy and paste the code from exercise 84
Refactor the code to use for instead of do/while
*/



/*Exercise 84
Create a new index84.js file
Copy and paste the code from exercise 74
Refactor the code to use do/while instead of while
*/

/*Exercise 74
Create a new index74.js file
Show the following output using while:
*
***
*****
*******
*********
***********
*************
var i=1,stars="";
while(i<14){
    stars=stars+'*';
    if(i%2!==0){
        console.log(stars);
    }    
    i++;
}
*/
/*
var i=1,stars="";
do{
    stars=stars+'*';
    if(i%2!==0){
        console.log(stars);
    }    
    i++;
}while(i<14);
*/

var stars="";
for(let i=1;i<14;i++){
    stars=stars+'*';
    if(i%2!==0){
        console.log(stars);
    }    
}



// *
// ***
// *****
// *******
// *********
// ***********
// *************