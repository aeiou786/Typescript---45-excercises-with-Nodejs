// define a function to create a car object with optional option
function create_car(manufacturer,model, ...options) {
    // initialize a car object with manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model: model,
    };
    // add additional options to the car
    options.forEach(Option => {
        let [key, value] = Option.split(':');
        car [key.trim()] = value.trim();
    });

    return car;
}

// called the function to creat a carobject
let my_car = create_car('Toyota','Corolla','color: Black','sunroof: true');


// print the variables to store all the information in the car object
console.log(my_car);