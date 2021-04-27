/*Exercise 32
Create a new index32.js file
Define a height variable and assig the following value: 10
Define a base variable and assig the following value: 4
Calculate the perimiter of the rectangular
Calculate the area of the rectangular
Show both calculation results, height and base length
Use a descriptive message to show all the values
*/


var heightNumber=10,baseNumber=4;
var perimiterOfRectangular=(heightNumber+baseNumber)*2;
var areaOfRectangle=heightNumber*baseNumber;
console.log("When height is "+heightNumber+", and base is "+baseNumber+", the perimeter of a rectangular is " +perimiterOfRectangular+". "+"Perimeter = "+"("+heightNumber+" + "+baseNumber+") * 2 = "+perimiterOfRectangular);
//When height is 10, and base is 4, the perimeter of a rectangular is 28. Perimeter = (10 + 4) * 2 = 28
console.log("When height is "+heightNumber+", and base is "+baseNumber+", the area of a rectangular is " +areaOfRectangle+". "+"Area = "+heightNumber+" * "+baseNumber+" = "+areaOfRectangle);
//When height is 10, and base is 4, the area of a rectangular is 40. Area = 10 * 4 = 40



