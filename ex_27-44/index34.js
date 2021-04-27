/*Exercise 34
Create a new index34.js file

Define the following variables: income, revenue and taxes

Assign the following values:

income: 1000
revenue: 600
taxes: 500
This months objectives are:

Income of at least 800 or more

Spend less than 400 on taxes

We pay bonus if our revenue is 600

Show the following output (console.log()):

Income Objective: true or false (use greater than or equal operator)
Taxes Objective: true or false (use less than operator)
Bonus Objective: true or false (use equality operator)
*/


var income=1000,revenue=600,taxes=500;
let incomeLimit=800,revenueLimit=600,taxesLimit=400;
let incomeObjective=income >= incomeLimit,taxesObjective=taxes < taxesLimit,revenueObjective=revenue == revenueLimit;
console.log("Income Objective: "+incomeObjective);
console.log("Taxes Objective: "+taxesObjective);
console.log("Revenue Objective: "+revenueObjective);
// Income Objective: true
// Taxes Objective: false
// Revenue Objective: true