import React, { useState } from 'react';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    
    const handleSearch = () => {
        const music = MusicKit.getInstance();
        music.api.search(searchTerm, { limit: 10, types: 'songs' })
          .then(results => {
            // Process the search results here
            console.log(results);
          })
          .catch(error => {
            // Handle search error
            console.error('Error searching for songs:', error);
          })
        };

    return (
        <div>
            <h1>Search</h1>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value) }
                placeholder="Search..."
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
