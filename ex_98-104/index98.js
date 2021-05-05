/*Exercise 98
Create a new index98.js file
Add all the numbers bettwen 0 and 1000 using for statement
The iteration must break if the partial result is bigger than 400
Show the result as output
*/


var sum=0;
for(let i=0;i<1001;i++){
    sum=sum+i;
    if(sum>400){
        console.log(sum);
        break;
    }
}

// 406