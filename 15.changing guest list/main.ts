let guestList = ["mukesh","dayaram","dhanio"];

let dontCome = guestList[0];

console.log(dontCome, "nahi ahh sakta");

guestList.splice(0,1,"shive");

guestList.forEach(guest => console.log(`hello ${guest}, would you like to dinner with me`));

