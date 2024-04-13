// creating a guest list array

let guestList = ["mukesh","dayaram","dhanio","raja"];

// making variable for those guest who cant come

let dontCome = guestList[0];

// printing the name of guest who cant come

console.log(dontCome, "nahi ahh sakta ");

// add or remove values from guest list array

guestList.splice(0,1, "shive");

// message print for a bigger table

console.log("good news we have found a bigger table for diner");

// adding a new guest at starting index of array

guestList.unshift("Ali");

// adding a new guest at ending index array

guestList.push("majnoo");

// adding a new guest middle of the index array

let middleIndex: number = Math.floor (guestList.length / 2);

//  adding a new guest to middle index array

guestList.splice(middleIndex, 0 , "shankar");

console.log("updated list of our guests");

guestList.forEach(oneguest => console.log(`hello ${oneguest}, would you like to dinner with me`),)



