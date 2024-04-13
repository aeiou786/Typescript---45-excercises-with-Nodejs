// making an array of countries and print its original order

let CountriesToVisit: string[] = ["China","America","Uae","Japan"];

console.log("original order", CountriesToVisit);

//  print an array in allphabaical orderr without modifieng the actual array

console.log('allphabatical order',[...CountriesToVisit].sort());

//  show that the array sill in order

console.log("still in original order", CountriesToVisit);

//  print the array in reversed order without modifieng the actuall array

console.log("reverse order",[...CountriesToVisit].reverse());

//  show that the array sill in order

console.log("still in original order", CountriesToVisit);

//  we have change the original array now

console.log("original array reversed", CountriesToVisit.reverse());

// print the array to show to back to its original order

console.log("back to original order", CountriesToVisit.reverse());

//  print the array to show its thet its orders has been changed in allphabatical order

console.log("sorted in allphabatical order",CountriesToVisit.sort());

//  we have changed again the original array now in reverse order again 

console.log("original array reversed again", CountriesToVisit.reverse());