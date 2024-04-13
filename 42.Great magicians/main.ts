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

let great_magicians = make_great (magicians_name);

show_magicians(great_magicians);