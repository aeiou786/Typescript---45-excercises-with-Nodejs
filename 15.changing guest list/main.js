var guestList = ["mukesh", "dayaram", "dhanio"];
var dontCome = guestList[0];
console.log(dontCome, "nahi ahh sakta");
guestList.splice(0, 1, "shive");
guestList.forEach(function (guest) { return console.log("hello ".concat(guest, ", would you like to dinner with me")); });
