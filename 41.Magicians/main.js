// define a function to print the magician names from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//  define an array containing magician name
var magician_names = ['dayaram', 'shive', 'mohan'];
// call the function to print the each magician name
show_magicians(magician_names);
