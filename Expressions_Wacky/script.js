//Bursch, Maverik Date: 12 February, 2014

alert("Enter how many miles you've ran each day. \nEXAMPLE: 4.5, 2.1, 3");

var monday = prompt("Enter your distance ran for Monday:"); //user input
var tuesday = prompt("Enter your distance ran for Tuesday:"); //user input
var wednesday = prompt("Enter your distance ran for Wednesday:"); //user input
var thursday = prompt("Enter your distance ran for Thursday:"); //user input
var friday = prompt("Enter your distance ran for Friday:"); //user input
var saturday = prompt("Enter your distance ran for Saturday:"); //user input
var sunday = prompt("Enter your distance ran for Sunday:"); //user input

var average = (Number(monday) + Number(tuesday) + Number(wednesday) + Number(thursday) + Number(friday) + Number(saturday) + Number(sunday))/7;

alert("The average distance you've ran this week is: " + average + " miles"); //alerts the user of the average disntance ran in a 7 day period.

console.log(monday); //console.log print out: monday
console.log(tuesday); //console.log print out: tuesday
console.log(wednesday); //console.log print out: wednesday
console.log(thursday); //console.log print out: thursday
console.log(friday); //console.log print out: friday
console.log(saturday); //console.log print out: saturday
console.log(sunday); //console.log print out: sunday

console.log(average); //console.log print out: average
console.log("Done."); //console.log printout shows the script is complete. 

