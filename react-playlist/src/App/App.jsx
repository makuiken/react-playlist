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
    document.addEventListener('musickitloaded', async function () {
      try {
        await MusicKit.configure({
          developerToken: 'MIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgfgUktzXUB4vkpuZS7qWCb2PXBr6QfN2XlhOyUCgZ0F6gCgYIKoZIzj0DAQehRANCAAToLwWr1U+GXmloqo2fASnQhYP1vxZQ2PC9XM2LlHQthIc9JNtWATw/TPKLO58qLQ0eXwpr50eA7I+zMQnYBEd/',
          app: {
            name: 'Listed',
            build: '1.0.0',
          },
        });
      } catch (err) {
        throw new Error(err);
      }
    });
  }, []);


  return (
    <div>
      <SearchBar setSearchResults={setSearchResults} />
      <SearchResults results={searchResults} />
      <Track />
      <Tracklist  tracks={tracks} />
      <Playlist playlist={playlist}/>
    </div>
  )
}

export default App;
