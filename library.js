var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }

}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {

var playL = library.playlists;
for (var key in playL)
    console.log(playL[key].id +": " + playL[key].name + " - " +
      playL[key].tracks.length +" tracks");



}


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {

  var tracks = library.tracks;
  for(var key in tracks)
    console.log(tracks[key].id + ": " +tracks[key].name +" by " +tracks[key].artist +
    " (" + tracks[key].album +")");

}


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var playL = library.playlists;
  var trackList = playL[playlistId].tracks; //array of tracks;
  var trackListLength = trackList.length; //length of array
  console.log (playL[playlistId].id + ": " + playL[playlistId].name
    + " - " + trackListLength +" tracks" );
  var tracks = library.tracks; // object tracks of the library
  for(var i = 0; i < trackListLength; i++) // for each track in playlist
    console.log(tracks[trackList[i]].id + ": " +tracks[trackList[i]].name +" by "
      +tracks[trackList[i]].artist + " (" + tracks[trackList[i]].album +")");

}


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  var playLists = library.playlists;
  var playL = playLists[playlistId];
  var tracks = playL.tracks;
  tracks.push(trackId);
  console.log(library.playlists);
}


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
  var id = uid();
  library.tracks[id] = {id: id, name: name, artist: artist, album: album};
  console.log(library.tracks);
}


// adds a playlist to the library

var addPlaylist = function (name) {
  var id = uid();
  library.playlists[id] = {id: id, name: name, tracks:[]};
  console.log(library.playlists);

}

/*
// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
var printSearchResults = function(query) {
}*/

//printPlaylists();
//printTracks();
//printPlaylist("p02");
//addTrackToPlaylist("t01","p02");
//console.log(uid());
//addTrack("hola","hello","bonjour");
addPlaylist("hello");