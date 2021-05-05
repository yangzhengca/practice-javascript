/*Exercise 104
Create a new index104.js file
Define a fibonacci variable and assign a function value
When executing the fibonacci function it will print the 10 first fibonacci sequence numbers as output
Execute this function 3 times
*/

var fibonacci=function() {
    let f1=-1,f2=1,f=0;
    for(let i=1;i<11;i++){
        f=f1+f2;
        f1=f2;
        f2=f;        
        console.log(f);
    }
}
fibonacci();
fibonacci();
fibonacci();


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