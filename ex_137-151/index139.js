/*Exercise 139
Create a new index139.js file
Define a numbers array with values between 1000 and 1
Iterate over the numbers array and filter the following values creating new arrays for each type:
Even numbers
Odd numbers
Show the last 10 odd numbers as output
Show the first 20 even numbers as output
*/

var numbers=[];
for(let i=0;i<1000;i++){
    numbers[i]=i+1;
}
numbers=numbers.reverse();
var evenNumbers=numbers.filter(function(num){
    if(num%2==0){
        return num;
    }else{

    }
})
var oddNumbers=numbers.filter(function(num){
    if(num%2!==0){
        return num;
    }else{

    }
})
for(let j=0;j<20;j++){
    console.log(evenNumbers[j]);
}
for(let k=0;k<10;k++){
    console.log(oddNumbers[k]);
}


// 1000
// 998
// 996
// 994
// 992
// 990
// 988
// 986
// 984
// 982
// 980
// 978
// 976
// 974
// 972
// 970
// 968
// 966
// 964
// 962
// 999
// 997
// 995
// 993
// 991
// 989
// 987
// 985
// 983
// 981


