require("dotenv").config();
var axios = require("axios")
var Spotify = require("node-spotify-api")
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);
//console.log(process.argv)
var command = process.argv[2];
var input = process.argv.slice(3).join(" ");

//console.log("command", command)//
//console.log("topic", input);

// menu switch
function menu(command) {

    switch (command) {
        case "concert-this":
            showConcerts();
            break;
        case "spotify-this-song":
            showSong();
            break;
        case "movie-this":
            showMovie();
            break;
        case "do-what-it-says":
            doWhat();
            break;
        default:
            console.log("I dont' know what you want")
    }
}

// 
function showConcerts() {
    console.log("concert:", input)

    var query = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp"
    console.log(query)

    axios.get(query).then(function (response) {

        //console.log(response.data)
        var items = response.data
        for (var i = 0; i < items.length; i++) {
            console.log("Venue:" + items[i].venue.name + " - Location: " + items[i].venue.city + " - Date: " + items[i].datetime)
        }
    })

}

function showSong() {
    
 
var spotify = new Spotify({
  id: keys.spotify.id,
  secret: keys.spotify.secret
});
 
spotify.search({ type: 'track', query: input }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 

// console.log(data.tracks.items);
for (var i=0; i<data.tracks.items.length;i++){


console.log(data.tracks.items[i].album.name);
console.log(data.tracks.items[i].name);
console.log(data.tracks.items[i].preview_url);
console.log(data.tracks.items[i].artists[0].name);
console.log("...")
}
});
    // console.log("song:", input)
    //  var query="https://api.spotify.com/v1/search?q=" + input;

    //  var client_id = ''
    //  var client_secret = ''
    //  var redirect_uri = 'REDIRECT_URI'; // Your redirect uri
    //  var scopes = \'user-read-private user-read-email\
    
    // console.log(query)
    // axios.get(query).then(function (response) {

    //     //console.log(response.data)
    //     var items = response.data
    //     for (var i = 0; i < items.length; i++) {
                  
    //         // console.log("Venue:" + items[i].venue.name + " - Location: " + items[i].venue.city + " - Date: " + items[i].datetime)

    //           console.log(items[i])


    //     }
    // })

}

// `node liri.js spotify-this-song '<song name here>'`

// * This will show the following information about the song in your terminal/bash window

//   * Artist(s)

//   * The song's name

//   * A preview link of the song from Spotify

//   * The album that the song is from

// * If no song is provided then your program will default to "The Sign" by Ace of Base.

// * You will utilize the [node-spotify-api](https://www.npmjs.com/package/node-spotify-api) package in order to retrieve song information from the Spotify API.







function showMovie() {
    console.log("movie:", input)
    var query = "hhtp://www.omdbapi.com/?t=" + input + "&type=movie&apikey=trilogy"
    console.log(query)

    axios.get(query).then(function (response) {
        // console.log(response.data)

        var items = response.data
        // console.log(items)
    //     * Title of the movie.
    //    * Year the movie came out.
    //    * IMDB Rating of the movie.
    //    * Rotten Tomatoes Rating of the movie.
    //    * Country where the movie was produced.
    //    * Language of the movie.
    //    * Plot of the movie.
    //    * Actors in the movie.
    console.log(items.Title)
    console.log(items.Year)
    console.log(items.Ratings[0].Value)
    console.log(items.Ratings[1].Value)
    console.log(items.Country)
    console.log(items.Language)
    console.log(items.Plot)
    console.log(items.Actors)
    })
}


function doWhat() {

    console.log("do:", topic)

}


menu(command)