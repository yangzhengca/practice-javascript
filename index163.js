/*Exercise 163
Create a new index163.js
Define a add function
This function will return a numeric value with result of adding all the numbers that we pass as parameter
As we don't know how many parameters we are going to get we need to use a dynamic way to add this functionality
Call the add function passing 5 numbers and show the result as output
Call the add function passing 10 numbers and show the result as output
*/


function add(){
    let result=0;
    for(let i=0;i<arguments.length;i++){
        result=result+arguments[i];
    }
    console.log(result);
    return result;
}

add(1,2,3,4,5);
// 15

add(1,2,3,4,5,6,7,8,9,10);
// 55
