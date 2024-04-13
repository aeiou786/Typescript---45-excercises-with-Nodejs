// define a function with rest parameter that accepts items arguments representing our sandwich
function make_sandwich(...items: string[]) {
    console.log('making a sandwiche with the folowing items');
    items.forEach(singleitem => console.log(singleitem));
    console.log('now enjoy the sandwich ');
}

// call the function three times with three different number of arguments
make_sandwich('chicken','cheese','mayo','egg');
make_sandwich('bread','butter');
make_sandwich('bread','butter','mayu','egg','cheese','chicken','tomato');
