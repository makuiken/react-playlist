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
