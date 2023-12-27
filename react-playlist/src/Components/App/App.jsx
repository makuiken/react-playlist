import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Track from '../Track/Track';
import Tracklist from '../TrackList/Tracklist'; 

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [tracks, setTracks] = useState([]);
  
  useEffect(() => {
    document.addEventListener('musickitloaded', function() {
      // MusicKit global is now defined
      window.MusicKit.configure({
        developerToken:"MIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgPBCK+duaQZ5o5pgnR/xj8AtPYVlEQQmIRGSvTkVY1GqgCgYIKoZIzj0DAQehRANCAARyu3VG6/z8elguvgbyOg+6mV2FLPRQCiA8+DBFO+mKz7zapU1KolK7HqWjZA4AWyqS8Eh4Ev2N2rLSEFj1tcyz",
        app: {
          name: 'Listed',
          build: '1.0.0'
        }
      });

      // Now that MusicKit is configured, you can use it here
      const musicKit = window.MusicKit.getInstance();
      musicKit.authorize().then(function() {
        // Authorization succeeded
        console.log('Authorization succeeded');
      }).catch(function(error) {
        // Authorization failed
        console.error('Authorization failed', error);
      });
    });
  }, []); // Empty dependency array to run the effect only once

  

  return (
    <div>
      <button id="apple-music-authorize">Authorize</button>
      <button id="apple-music-unauthorize">Unauthorize</button>
      <SearchBar setSearchResults={setSearchResults} />
      <SearchResults results={searchResults} />
      <Track />
      <Tracklist  tracks={tracks} />
      <Playlist playlist={playlist}/>
    </div>
  )
}

export default App;
