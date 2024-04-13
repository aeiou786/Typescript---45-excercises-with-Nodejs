var userNames = ['Dhanio', 'Mukesh', 'Admin', 'Raja', 'Dayaram'];
userNames.forEach(function (oneUser) {
    if (oneUser === 'Admin') {
        console.log("Hello ".concat(oneUser, ", would you like see a status report"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for logging in again"));
    }
});
