import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [isMusicKitReady, setIsMusicKitReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  let musicKit;

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

  const handleSearch = (searchTerm) => {
    setIsLoading(true);
    if (window.MusicKit && isMusicKitReady) {
      const musicKit = window.MusicKit.getInstance();
      musicKit.api.search(searchTerm, { limit: 25, types: 'songs' })
        .then(results => {
          // Process and display the search results
          setSearchResults(results.songs.data); 
          console.log(results); // Or update state with the results
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error during MusicKit search:', error);
          setIsLoading(false);
        });
    }
  };

  return (
    <div>
      <button onClick={handleAuthorize}>Login to your Apple Music account</button>
      <div>
        <SearchBar onSearch={handleSearch} />
        {isLoading ? (
          <div>Loading...</div> // You can replace this with a spinner or any loading component
        ) : (
          <SearchResults results={searchResults} />
        )}
      </div>
      <Playlist playlist={playlist}/>
    </div>
  )
}

export default App;
