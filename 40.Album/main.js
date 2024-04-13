//  define the make album finction
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling thre time function and creating three variables with fiffernt values
var album1 = make_album('Mohan', 'album title 1');
var album2 = make_album('raja', 'album title 2');
// calling a make album functton with third parameter
var album3 = make_album('mukesh', 'album title 3', 10);
// printing values of our object created my function
console.log(album1);
console.log(album2);
console.log(album3);
