import React, { useState, useEffect } from 'react';
import { fetchPlaylist } from '../../services/musicKitService';

const SearchResults = ({ results }) => {


    return (
      <div>
        <h2>Search Results</h2>
        <ul>
          {results.map((track) => (
            <li key={track.id}>
              <strong>{track.name}</strong> by {track.artistName} from the album {track.albumName}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default SearchResults;
