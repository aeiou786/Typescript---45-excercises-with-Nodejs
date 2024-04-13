// define the function to show magicians name
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "the great ".concat(name); });
}
// define name array of magicians name
var magicians_name = ['dayaram', 'shive', 'mohan'];
var great_magicians = make_great(magicians_name);
show_magicians(great_magicians);
