// define the function to show magicians name
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// function make magician great through .map
function make_great(magicians) {
    return magicians.map(function (name) { return "the great ".concat(name); });
}
// define name array of magicians name
var magicians_name = ['dayaram', 'shive', 'mohan'];
// making a copy of original array through .slice function
var copy_magicians_name = magicians_name.slice();
// modify the copied array to include the great with name
var copy_great_magicians = make_great(copy_magicians_name);
// show both arrayoriginal and copied
// original
console.log('original Array');
show_magicians(magicians_name);
// copied
console.log('copied Array');
show_magicians(copy_great_magicians);
