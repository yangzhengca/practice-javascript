/*Exercise 111
Create a new index111.js file
Define a even function that has one numeric parameter and returns a boolean value
This function must validate if the number passed as parameter is an even number or not (true or false)
Call this function using the following parameters: 2, 5, 3, 24, 12
If the number is even show the following message: %number% is even
Else show the following message: %number% is odd
*/


function even(n1) {
    if(n1%2==0){
        console.log(`${n1} is even`);
        return true;        
    }else{
        console.log(`${n1} is odd`);
        return false;        
    }
}

even(2);
even(5);
even(3);
even(24);
even(12);

// 2 is even
// 5 is odd
// 3 is odd
// 24 is even
// 12 is even