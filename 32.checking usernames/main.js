// current users array
var currentUsers = ['Dhanio', 'mukesh', 'Mungi', 'Dayaram', 'Vishnoo'];
// new users array
var newUsers = ['Mohan', 'Shive', 'Mukesh', 'Mungi', 'Majnoo'];
// loop thruogh new users to check for usernsme availability
newUsers.forEach(function (newOneUser) {
    // making condition for user name already exist and save in our condition
    var ourCondition = currentUsers.some(function (currentOnUser) { return currentOnUser.toLowerCase() === newOneUser.toLowerCase(); });
    // print different messages using if and else conditions
    if (ourCondition) {
        console.log("sorry ".concat(newOneUser, ", is already taken"));
    }
    else {
        console.log("this username ".concat(newOneUser, " is available"));
    }
});
