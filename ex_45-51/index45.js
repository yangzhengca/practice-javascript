var playerName="Darian Durant is lame";
var teams="BC Lions, Calgary Stampeders, Edmonton Eskimos, Saskatchewan Roughriders & Winnipeg Blue Bombers";
var message="Regina is the best Canadian city, Go Riders";
let result1=playerName.slice(0,16);
console.log(result1);
let result2=teams.slice(66,72);
console.log(result2);
let result3=message.slice(10,18);
console.log(result3);
let result4=message.slice(32,36);
console.log(result4);
// Darian Durant is
// riders
// the best
// , Go

function titleCase(str) {
    newStr = str.slice(0,1).toUpperCase() +str.slice(1).toLowerCase();
        return newStr;
    }

let result5=titleCase(result2);//Riders
result5=" "+result5;
result3=" "+result3;
let result6=result5+" player";

let result7=result1+result3+result6+result4+result5+"!!";
console.log(result7);//Darian Durant is the best Riders player, Go Riders!!

