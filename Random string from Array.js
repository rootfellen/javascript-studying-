var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function buyingLunch() {

var randomNumber = Math.floor(Math.random()*names.length);

var randomPerson = names[randomNumber];

return (randomPerson + " is going to buy lunch today!")


}
