//Bursch, Maverik Date: 12 February, 2014

var bullet1 = prompt("This will calcualte the average bullet overall length of your test lot. \nPlease enter the first bullet OAL:"); //prompt for user directions and bullet #1 user entry
var bullet2 = prompt("Please enter the second bullet OAL:"); //bullet #2 user entry
var bullet3 = prompt("Please enter the third bullet OAL:"); //bullet #3 user entry
var bullet4 = prompt("Please enter the fourth bullet OAL:"); //bullet #4 user entry
var bullet5 = prompt("Please enter the fifth bullet OAL:");  //Bullet #5 user entry

var average = (Number(bullet1) + Number(bullet2) + Number(bullet3) + Number(bullet4) + Number(bullet5))/5; //variable to find the median of the 5 bullet lenghths the user entered. 

alert("Your average OAL for this lot is: " + average + " inches"); //alert to user showing average bullet length for the 5 bullets entered.

console.log(bullet1); //console.log printout B1
console.log(bullet2); //console.log printout B2
console.log(bullet3); //console.log printout B3
console.log(bullet4); //console.log printout B4
console.log(bullet5); //console.log printout B5
console.log(average); //console.log printout average