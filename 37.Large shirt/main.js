"use strict";
function make_shirt(size = 'large', message = 'I love typescript') {
    console.log(`creating a ${size} shirt whith the ${message} print on shirt`);
}
//  calling a function by default
make_shirt();
// calling a function now with medium size and default message
make_shirt('medium');
// calling a function now with small size and different message
make_shirt('small', 'I love javascript');
