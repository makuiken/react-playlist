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
  const [isMusicKitReady, setIsMusicKitReady] = useState(false);
  let musicKit; // Declare musicKit here

  useEffect(() => {
    if (window.MusicKit) {
      console.log("Directly configuring MusicKit");
  
      window.MusicKit.configure({
        developerToken: import.meta.env.VITE_MUSICKIT_TOKEN,
        app: {
          name: 'Listed',
          build: '1.0.0',
        },
      });
  
      musicKit = window.MusicKit.getInstance();
      musicKit.authorize().then(() => {
        console.log('Authorization succeeded');
        setIsMusicKitReady(true);
      }).catch((error) => {
        console.error('Authorization failed', error);
      });
  
    } else {
      console.error("MusicKit library not found");
    }
  }, []);
  
  const handleAuthorize = () => {
    const musicKit = window.MusicKit.getInstance();
    musicKit.authorize().then(() => {
      console.log('Authorization succeeded');
      setIsMusicKitReady(true);
    }).catch((error) => {
      console.error('Authorization failed', error);
    });
  };

  // Example function to use MusicKit
  const getAlbums = () => {
    if(isMusicKitReady) {
      if (window.MusicKit && window.MusicKit.getInstance()) {
        const musicKit = window.MusicKit.getInstance();
        musicKit.api.library.albums().then(albums => {
          console.log(albums);
        }).catch(error => {
          console.error('Error fetching albums', error);
        });
      } else {
        console.log('MusicKit not initialized or user not authorized');
      }
    } else {
      console.log('MusicKit not ready');
    }

  };

  return (
    <div>
      <button onClick={getAlbums}>Get Albums</button>
      <button onClick={handleAuthorize}>Authorize</button>
      <SearchBar setSearchResults={setSearchResults} />
      <SearchResults results={searchResults} />
      <Track />
      <Tracklist  tracks={tracks} />
      <Playlist playlist={playlist}/>
    </div>
  )
}

export default App;
