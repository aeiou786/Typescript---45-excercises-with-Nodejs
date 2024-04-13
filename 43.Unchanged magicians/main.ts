// define the function to show magicians name
function show_magicians (magicians: string[]) {
    magicians.forEach(name => console.log(name));
}
// function make magician great through .map
function make_great (magicians: string[]) {
  return magicians.map(name => `the great ${name}`);  
}

// define name array of magicians name
let magicians_name = ['dayaram','shive','mohan'];

// making a copy of original array through .slice function
let copy_magicians_name = magicians_name.slice();

// modify the copied array to include the great with name
let  copy_great_magicians = make_great(copy_magicians_name);

// show both arrayoriginal and copied

// original
console.log('original Array');
show_magicians(magicians_name);

// copied
console.log('copied Array')
show_magicians(copy_great_magicians);