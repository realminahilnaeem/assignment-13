let currentAge=parseInt(prompt("what is your current age:"));
console.log(currentAge);
let weekInayear=52;
let expectedAge=90;
let weeksweLost=weekInayear*currentAge;
let totalWeeks=expectedAge*weekInayear; 
console.log(`Weeks we expect,we have are ${totalWeeks-weeksweLost}`);

