/*Exercise 99
Create a new index99.js file
Add all even numbers bettwen 0 and 1000 using for statement
The iteration must break after finding the first 20 even numbers
Show the result as output
*/

var sum=0,j=0;
for(let i=0;i<1001;i++){
    if(i%2==0){
        sum=sum+i;
        j++;
        // console.log(i);
        if(j==20){
            break;
        }
    }
}
console.log(sum);

// 380