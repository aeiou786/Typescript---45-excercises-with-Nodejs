// define a function with rest parameter that accepts items arguments representing our sandwich
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log('making a sandwiche with the folowing items');
    items.forEach(function (singleitem) { return console.log(singleitem); });
    console.log('now enjoy the sandwich ');
}
// call the function three times with three different number of arguments
make_sandwich('chicken', 'cheese', 'mayo', 'egg');
make_sandwich('bread', 'butter');
make_sandwich('bread', 'butter', 'mayu', 'egg', 'cheese', 'chicken', 'tomato');
