/*Exercise 153
Create a new index153.js
Define a arithmetic variable and assing a literal value with the following methods:
add
subtract
multiply
divide
remainder
Each method accepts 2 numeric parameters and shows the operation result
So, add will add both numbers together and log the result (the rest of the methods work in the same way)
Show an error if the parameters values are not numbers
Call the methods:
add(2, 10)
subtract(10, 5)
multiply(3, 100)
divide(40, 2)
remainder(20, 2)
*/


var arithmetic={
    add:function(n1,n2){
        if(typeof n1=="number" && typeof n2=="number"){
            console.log(n1+n2);
        }else{
            console.log('Error! Please input numbers.')
        }
    },
    subtract:function(n3,n4){
        if(typeof n3=="number" && typeof n4=="number"){
            console.log(n3-n4);
        }else{
            console.log('Error! Please input numbers.')
        }
    },
    multiply:function(n5,n6){
        if(typeof n5=="number" && typeof n6=="number"){
            console.log(n5*n6);
        }else{
            console.log('Error! Please input numbers.')
        }
    },
    divide:function(n7,n8){
        if(typeof n7=="number" && typeof n8=="number"){
            console.log(n7/n8);
        }else{
            console.log('Error! Please input numbers.')
        }
    },
    remainder:function(n9,n10){
        if(typeof n9=="number" && typeof n10=="number"){
            console.log(n9%n10);
        }else{
            console.log('Error! Please input numbers.')
        }
    }
};


arithmetic.add(2, 10);
arithmetic.subtract(10, 5);
arithmetic.multiply(3, 100);
arithmetic.divide(40, 2);
arithmetic.remainder(20, 2);


// 12
// 5
// 300
// 20
// 0