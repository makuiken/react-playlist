import React from 'react';

const SearchResultItem = ({ track }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <img 
        src={track.attributes.artwork.url.replace('{w}', '100').replace('{h}', '100')} 
        alt={track.attributes.name} 
        style={{ marginRight: '10px' }}
      />
      <div>
        <div><strong>{track.attributes.name}</strong></div>
        <div>{track.attributes.artistName}</div>
      </div>
    </div>
  );
};

const SearchResults = ({ results }) => {
  if (!results || results.length === 0) {
    return <div>No results found</div>;
  }

  return (
    <div>
      {results.map(track => (
        <SearchResultItem key={track.id} track={track} />
      ))}
    </div>
  );
};

export default SearchResults;
