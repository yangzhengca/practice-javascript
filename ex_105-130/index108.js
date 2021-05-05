/*Exercise 108
Create a new index108.js file
Define a sort function that accepts 3 numeric parameters with the following names: number1, number2 and number3
The function must sort the params values from lower to higher
Call the function with the following parameters: 10, 8, 25
Show the following result as output: 8, 10, 25
Refactor the sort function to accept a fourth parameter with the name highToLow (boolean)
If highToLow is true then you need to show the following output: 25, 10, 8
Call the function again with the following parameters: 10, 8, 25, true
*/

/*
function sort(number1,number2,number3,highToLow) {
    if(highToLow){
        if(number1>number2 && number2>number3){
            console.log(number1,number2,number3);
        }
        else if(number1>number3 && number3>number2){
            console.log(number1,number3,number2);
        }
        else if(number2>number1 && number1>number3){
            console.log(number2,number1,number3);
        }
        else if(number2>number3 && number3>number1){
            console.log(number2,number3,number1);
        }
        else if(number3>number2 && number2>number1){
            console.log(number3,number2,number1);
        }
        else{
            console.log(number3,number1,number2);
        }
    }else{
        if(number1>number2 && number2>number3){
            console.log(number3,number2,number1);
        }
        else if(number1>number3 && number3>number2){
            console.log(number2,number3,number1);
        }
        else if(number2>number1 && number1>number3){
            console.log(number3,number1,number2);
        }
        else if(number2>number3 && number3>number1){
            console.log(number1,number3,number2);
        }
        else if(number3>number2 && number2>number1){
            console.log(number1,number2,number3);
        }
        else{
            console.log(number2,number1,number3);
        }
    }
}

// sort(10,8,25);
// 8 10 25

sort(10,8,25,true);
// 25 10 8
*/


function sort(number1,number2,number3,highToLow){
    var x,y,z;
    if(number1>number2){
        if(number2>number3){
            x=number1;//big
            y=number2;//middle
            z=number3;//small
        }else{
            if(number1>number3){
                x=number1;
                y=number3;
                z=number2;
            }else{
                x=number3;
                y=number1;
                z=number2;
            }
        }
    }else{
        if(number2<number3){
            x=number3;
            y=number2;
            z=number1;
        }else{
            if(number1<number3){
                x=number2;
                y=number3;
                z=number1;
            }else{
                x=number2;
                y=number1;
                z=number3;
            }
        }
    }
    if(highToLow){
        console.log(x,y,z);
    }else{
        console.log(z,y,x);
    }
}


// sort(10,8,25);
// 8 10 25

sort(10,8,25,true);
// 25 10 8