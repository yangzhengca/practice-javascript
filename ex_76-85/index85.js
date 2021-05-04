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


var i=1,f=0,f1=-1,f2=1;
do{
    f=f1+f2;
    f1=f2;
    f2=f;
    console.log(f);
    i++;
}while(i<11);


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