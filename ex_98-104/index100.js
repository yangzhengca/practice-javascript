/*Exercise 100
Create a new index100.js file
Define a function that will show even numbers from 0 to 100 as output
*/


function sumEven() {
    let sum=0;
    for(let i=0;i<101;i++){
        if(i%2==0){
            sum=sum+i;
        }
    }
    console.log(sum);
}

sumEven();