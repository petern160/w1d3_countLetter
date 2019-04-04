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
             },
   printPlaylists : function () {

var playL = this.playlists;
for (var key in playL)
    console.log(playL[key].id +": " + playL[key].name + " - " +
      playL[key].tracks.length +" tracks");

  

},
 printTracks : function () {

  var tracks = this.tracks;
  for(var key in tracks)
    console.log(tracks[key].id + ": " +tracks[key].name +" by " +tracks[key].artist +
    " (" + tracks[key].album +")");

},
 printPlaylist : function (playlistId) {
  var playL = this.playlists;
  var trackList = playL[playlistId].tracks; //array of tracks;
  var trackListLength = trackList.length; //length of array
  console.log (playL[playlistId].id + ": " + playL[playlistId].name
    + " - " + trackListLength +" tracks" );
  var tracks = this.tracks; // object tracks of the library
  for(var i = 0; i < trackListLength; i++) // for each track in playlist
    console.log(tracks[trackList[i]].id + ": " +tracks[trackList[i]].name +" by "
      +tracks[trackList[i]].artist + " (" + tracks[trackList[i]].album +")");

},
 addTrackToPlaylist : function (trackId, playlistId) {
  var playLists = this.playlists;
  var playL = playLists[playlistId];
  var tracks = playL.tracks;
  tracks.push(trackId);
  console.log(this.playlists);
},
 addTrack : function (name, artist, album) {
  var id = uid();
  this.tracks[id] = {id: id, name: name, artist: artist, album: album};
  console.log(this.tracks);
},
 addPlaylist : function (name) {
  var id = uid();
  this.playlists[id] = {id: id, name: name, tracks:[]};
  console.log(this.playlists);

}


}


var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// (use this for addTrack and addPlaylist)




// adds a track to the this

// library.printPlaylists();
// library.printTracks();
// library.printPlaylist("p01");
// library.addTrackToPlaylist("t01","p02");
//console.log(uid());
// library.addTrack("hola","hello","bonjour");
// library.addPlaylist("hello");


