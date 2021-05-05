/*Exercise 95
Create a new index95.js file
Copy and paste the code from exercise 85
Refactor the code to use for instead of do/while
*/


/*Exercise 85
Create a new index85.js file
Copy and paste the code from exercise 75
Refactor the code to use do/while instead of while
*/

/*Exercise 75
Create a new index75.js file
Write a program that will show the first 10 Fibonacci sequence numbers
var i=1,f=0,f1=-1,f2=1;
while(i<11){
    f=f1+f2;
    f1=f2;
    f2=f;
    console.log(f);
    i++;
}
*/

/*
var i=1,f=0,f1=-1,f2=1;
do{
    f=f1+f2;
    f1=f2;
    f2=f;
    console.log(f);
    i++;
}while(i<11);
*/

var f=0,f1=-1,f2=1;
for(let i=1;i<11;i++){
    f=f1+f2;
    f1=f2;
    f2=f;
    console.log(f);
}


// 0
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34