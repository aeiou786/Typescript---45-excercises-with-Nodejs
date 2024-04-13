// current users array

let currentUsers = ['Dhanio','mukesh','Mungi','Dayaram','Vishnoo'];

// new users array
let newUsers = ['Mohan','Shive','Mukesh','Mungi','Majnoo'];

// loop thruogh new users to check for usernsme availability
newUsers.forEach(newOneUser =>{
    // making condition for user name already exist and save in our condition
    let ourCondition = currentUsers.some(currentOnUser => currentOnUser.toLowerCase() === newOneUser.toLowerCase())
    // print different messages using if and else conditions
    if (ourCondition) {
console.log(`sorry ${newOneUser}, is already taken`);
    }
    else{
        console.log(`this username ${newOneUser} is available`);
    }
})
