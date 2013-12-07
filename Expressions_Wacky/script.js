//Bursch, Maverik Date: 05 December, 2013 

var bullet1 = prompt("This will calcualte the average bullet overall length of your test lot. \nPlease enter the first bullet OAL:");
var bullet2 = prompt("Please enter the second bullet OAL:");
var bullet3 = prompt("Please enter the third bullet OAL:");
var bullet4 = prompt("Please enter the fourth bullet OAL:");
var bullet5 = prompt("Please enter the fifth bullet OAL:"); 

var average = (Number(bullet1) + Number(bullet2) + Number(bullet3) + Number(bullet4) + Number(bullet5))/5;

alert("Your average OAL for this lot is: " + average + " inches");

console.log(bullet1);
console.log(bullet2);
console.log(bullet3);
console.log(bullet4);
console.log(bullet5);
console.log(average);