var ticket = 500;
var hotel = 250;
var entertainmentMuseum = 120;

//usd and euro
var dollarSum = 10650.34;
var euroSum = 10650.03;

var allSum = (ticket + hotel) * dollarSum + entertainmentMuseum * euroSum;
var raounded = Math.round(allSum);

var money = +prompt("Bratan qancha pulingiz bor?");

console.log(`Umumiy xarajiatlar: ${raounded}\n Sizning summa: ${money}`);
