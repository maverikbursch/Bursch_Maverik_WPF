//Bursch, Maverik Date: 12 February, 2014
alert("Please enter only numerical values without dollar signs or decimals. EXAMPLE: '1525' ");

var checkingAccount = prompt("Please enter the amount in your checking account:"); //Checking Account Balance
var savingsAccount = prompt("Please enter the amount in your savings account:"); //Savings Account Balance
var cashOnHand = prompt("Please enter the amount of cash on hand you have:"); //Cash on hand Balance (Wallet, Purse, etc.)

var outgoingBills = prompt("Please enter the total amount of outgoing bills this month:"); //Total amount of outgoing bills. 

var total = (Number(checkingAccount) + Number(savingsAccount) + Number(cashOnHand))- Number(outgoingBills); //Math to figure out toal balance

alert("You current balance is: $" + total + " USD"); //Alert to show user. 

console.log(checkingAccount); //console.log print out for entered data.
console.log(savingsAccount); //console.log print out for entered data.
console.log(cashOnHand); //console.log print out for entered data.

console.log(outgoingBills);

console.log(total); //console.log for sum of entered data. 