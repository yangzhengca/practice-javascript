/*Exercise 134
Create a new index134.js file
Define a numbers array
Assign values between 1 and 1000
Iterate over the numbers array and add all numbers items
On each iteration show the partial result
1
3
6
... so on
If the final result equals 500500 then show the following output: Good job!!!
Else show: Take a look to see if something is wrong
*/


var numbers=[],result=0;
for(let i=0;i<1000;i++){
    numbers[i]=i+1;
    console.log(numbers[i]);
    result+=numbers[i];
    console.log(result);
}
if(result==500500){
    console.log('Good job!!!');
}else{
    console.log('Take a look to see if something is wrong');
}

