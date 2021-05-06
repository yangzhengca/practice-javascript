/*Exercise 146
Create a new index146.js
Copy and paste the previous user definition with properties and values
Create a function with the name shouldOpenBatCave that accepts 2 parameters: username and password
This function will return true if the username is batman and the password is Alfred1960KPO!
The function returns false if the username or password are incorrect
Now try to open the BatCave using the user as shouldOpenBatCave function parameter (must return true or false)
If we shouldOpenBatCave then show the following output:
Welcome back batman!!
Else show the following output:
Sorry, you can't enter the Batcave, try again..
*/

var user={username:'batman',password:'Alfred1960ROCKS!'};
function shouldOpenBatCave(username,password){
    if(username=='batman' && password==' Alfred1960KPO!'){
        return true;
    }else{
        return false;
    }    
}

if(shouldOpenBatCave(user.username,user.password)){
    console.log('Welcome back batman!!');    
}else{
    console.log("Sorry, you can't enter the Batcave, try again..");
}



// Sorry, you can't enter the Batcave, try again..