// define a function to create a car object with optional option
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // initialize a car object with manufacturer and model
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // add additional options to the car
    options.forEach(function (Option) {
        var _a = Option.split(':'), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// called the function to creat a carobject
var my_car = create_car('Toyota', 'Corolla', 'color: Black', 'sunroof: true');
// print the variables to store all the information in the car object
console.log(my_car);
