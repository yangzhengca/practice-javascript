/*Exercise 131
Create a new index131.js file
Define a femaleStudents array and assign 5 students
Define a maleStudents array and assign 5 students
Define a students array and assign all students name using the femaleStudents and maleStudents arrays
Sort the students list
Show the following output:
Each femaleStudents name using numeric indexes
Each maleStudents name using while
Each students name using for
*/


var femaleStudents=['Lily','Mary','Lucy','Sara','Ashli'];
var maleStudents=['Tom','Jack','Bob','Joe','Jim'];
var students=femaleStudents.concat(maleStudents);

var sortStudents=students.sort();

// for(let i=0;i<femaleStudents.length;i++){
//     console.log(femaleStudents[i]);
// }

// Lily
// Mary
// Lucy
// Sara
// Ashli

// let j=0;
// while(j<maleStudents.length){
//     console.log(maleStudents[j]);
//     j++;
// }

// Tom
// Jack
// Bob
// Joe
// Jim

// for(let k=0;k<students.length;k++){
//     console.log(students[k]);
// }

// Lily
// Mary
// Lucy
// Sara
// Ashli
// Tom
// Jack
// Bob
// Joe
// Jim


console.log(sortStudents);

// [
//     'Ashli', 'Bob',
//     'Jack',  'Jim',
//     'Joe',   'Lily',
//     'Lucy',  'Mary',
//     'Sara',  'Tom'
//   ]

