/*Exercise 112
Create a new index112.js file
Define a showNumbers function that accepts two numeric parameters: start and end
The showNumbers function will show all the numbers between the start and end numbers
If start is bigger than the second one show the numbers from higher to lower
If start is smaller than the second one then show the numbers from lower to higher
Call the showNumbers function using the following parameters:
start: 0, end: 1000
start: 1000, end: 0
start: 100, end: 100
start: "100", end: 300
Find a way to deal with the following scenarios:
start and end are the same number
parameters that aren't numbers
*/


function showNumbers(start,end) {
    if(typeof start=='number' && typeof end=='number'){
        if(start==end){
            console.log(start);
        }else if(start<end){
            for(let i=start;i<(end+1);i++){
                console.log(i);
            }
        }else{
            for(let i=start;i>(end-1);i--){
                console.log(i);
            }
        }
           
    }else{
        if(typeof Number(start)=='number' && typeof Number(end)=='number' ){
            if(start==end){
                console.log(start);
            }else if(start<end){
                for(let i=start;i<(end+1);i++){
                    console.log(i);
                }
            }else{
                for(let i=start;i>(end-1);i--){
                    console.log(i);
                }
            }
        }else{
            console.log('Please input numbers');
        }        
    } 
}

showNumbers(0,1000);
showNumbers(1000,0);
showNumbers(100,100);
showNumbers('100',300);