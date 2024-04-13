var userName = ['Dhanio', 'Mukesh', 'Admin', 'Raja', 'Dayaram'];
userName = [];
if (userName.length === 0) {
    console.log('your array is empty we need some users ');
}
else {
    // using foreEach and loop on array
    userName.forEach(function (oneUser) {
        if (oneUser === 'Admin') {
            console.log("Hello ".concat(oneUser, ", would you like see a status report"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you for logging in again"));
        }
    });
}
