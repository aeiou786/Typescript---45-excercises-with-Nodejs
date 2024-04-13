// creating variables

let userNames = ['Dhanio','Mukesh','Admin','Raja','Dayaram'];


// using foreEach and loop on array
userNames.forEach(oneUser =>{
    if (oneUser ==='Admin') {
console.log(`Hello ${oneUser}, would you like see a status report`);
    }
    else{
        console.log(`Hello ${oneUser}, thank you for logging in again`);
    }
})