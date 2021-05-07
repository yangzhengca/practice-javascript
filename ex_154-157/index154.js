/*Exercise 154
Create a new index154.js
Define a player variable and assign a literal object with the following properties and methods:
property: name, value: null
property: energy, value: 100
property: lives, value: 3
method: loseEnergy
method: recoverEnergy
method: loseLife
method: recoverLife
Methods
The loseEnergy accepts a damage numeric parameter and reduces the player object energy property value
The recoveryEnergy accepts a energyUp numeric parameter and restores the player object energy property value
The loseLife doesn't accept parameters and just subtract one player life every time you call it
The recoverLife doesn't accept parameters and just adds one player life every time you call it
Rules
The player energy can't be negative
The player energy can't be more than 100
The player lives can't be bigger thant 99
If the player energy is equal or lees than 0 then the player will lose a life
Play Time!!!
Set the player name
Player lose a life
Player lose 10 energy value
Player lose 5 energy value
Player lose 15 energy value
Player lose 20 energy value
Player earn 10 energy value
Player lose 30 energy value
Player lose 40 energy value
Player lose a life
Player wins a life
Player wins a life
Simulate each game play using the players object methods
Show the following output after doing all the object methods calls
The %player name% has %energy% energy % and  %lifes% lifes
*/



/*

var player={
    name:null,
    energy:100,
    lives:3,
    loseEnergy:function(damageNum){
        this.energy=this.energy-damageNum;
        if(this.energy<=0){
            this.lives-=1;
        }
    },
    recoverEnergy:function(energyUp){
        this.energy=this.energy+energyUp;
        if(this.energy>100){
            console.log("The player energy can't be more than 100");
        }
    },
    loseLife:function(){
        this.lives-=1;
    },
    recoverLife:function(){
        this.lives+=1;
        if(this.lives>99){
            console.log("The player lives can't be bigger thant 99");
        }
    },
}

player.name='Ethan';
player.loseLife();
player.loseEnergy(10);
player.loseEnergy(5);
player.loseEnergy(15);
player.loseEnergy(20);
player.recoverEnergy(10);
player.loseEnergy(30);
player.loseEnergy(40);
player.loseLife();
player.recoverLife();
player.recoverLife();

console.log("The "+player.name+" has "+player.energy+" energy and "+player.lives+" lifes")

// The Ethan has -10 energy and 2 lifes
*/

// Reasonable modify
var player={
    name:null,
    energy:100,
    lives:3,
    loseEnergy:function(damageNum){
        this.energy=this.energy-damageNum;
        if(this.energy<=0){
            this.lives-=1;
            if(this.lives==0){
                console.log("Game Over!(Lose energy) With "+player.energy+" energy and "+player.lives+" lifes");
                }else{
                    this.energy=100;
            }          
            
        }
    },
    recoverEnergy:function(energyUp){
        this.energy=this.energy+energyUp;
        if(this.energy>100){
            console.log("I can't add more energy.");
            this.energy=100;
        }
    },
    loseLife:function(){
        this.lives-=1;
        if(this.lives==0){
            console.log("Game Over!(Lose life) With "+player.energy+" energy and "+player.lives+" lifes");
        }
    },
    recoverLife:function(){
        if(this.lives>0){
        this.lives=this.lives+1;
        if(this.lives>99){
            console.log("I can't have more lives!");
            this.lives=99;
        }}else{
            // console.log("I am already done!")
        }
        ;
    },
}


player.name='Ethan';
player.loseLife();
console.log("1.The "+player.name+" has "+player.energy+" energy and "+player.lives+" lifes");// 1.The Ethan has 100 energy and 2 lifes
player.loseEnergy(10);
console.log("2.The "+player.name+" has "+player.energy+" energy and "+player.lives+" lifes");//2.The Ethan has 90 energy and 2 lifes
player.loseEnergy(5);
console.log("3.The "+player.name+" has "+player.energy+" energy and "+player.lives+" lifes");//3.The Ethan has 85 energy and 2 lifes
player.loseEnergy(15);
console.log("4.The "+player.name+" has "+player.energy+" energy and "+player.lives+" lifes");//4.The Ethan has 70 energy and 2 lifes
player.loseEnergy(20);
console.log("5.The "+player.name+" has "+player.energy+" energy and "+player.lives+" lifes");//5.The Ethan has 50 energy and 2 lifes
player.recoverEnergy(10);
console.log("6.The "+player.name+" has "+player.energy+" energy and "+player.lives+" lifes");//6.The Ethan has 60 energy and 2 lifes
player.loseEnergy(30);
console.log("7.The "+player.name+" has "+player.energy+" energy and "+player.lives+" lifes");//7.The Ethan has 30 energy and 2 lifes
player.loseEnergy(40);
console.log("8.The "+player.name+" has "+player.energy+" energy and "+player.lives+" lifes");//8.The Ethan has 100 energy and 1 lifes

player.loseLife();//dead here
console.log("9.The "+player.name+" has "+player.energy+" energy and "+player.lives+" lifes");//9.The Ethan has 100 energy and 0 lifes
player.recoverLife();
console.log("10.The "+player.name+" has "+player.energy+" energy and "+player.lives+" lifes");//10.The Ethan has 100 energy and 0 lifes
player.recoverLife();
console.log("11.The "+player.name+" has "+player.energy+" energy and "+player.lives+" lifes")//The Ethan has 100 energy and 0 lifes



// 2.The Ethan has 90 energy and 2 lifes
// 3.The Ethan has 85 energy and 2 lifes
// 4.The Ethan has 70 energy and 2 lifes
// 5.The Ethan has 50 energy and 2 lifes
// 6.The Ethan has 60 energy and 2 lifes
// 7.The Ethan has 30 energy and 2 lifes
// 8.The Ethan has 100 energy and 1 lifes
// Game Over!
// The Ethan has 100 energy and 0 lifes
// 9.The Ethan has 100 energy and 0 lifes
// I am already done!
// 10.The Ethan has 100 energy and 0 lifes
// I am already done!
// The Ethan has 100 energy and 0 lifes