/*Exercise 75
Create a new index75.js file
Write a program that will show the first 10 Fibonacci sequence numbers
*/


var i=1,f=0,f1=-1,f2=1;
while(i<11){
    f=f1+f2;
    f1=f2;
    f2=f;
    console.log(f);
    i++;
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