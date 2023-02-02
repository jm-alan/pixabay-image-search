import React from 'react';
import { useSelector } from 'react-redux';
import SearchResult from './SearchResult';

export default function SearchResults () {
  const results = useSelector(state => state.images.display.results);

  return (
    <div id='search-results-container'>
      {Object.entries(results).map(([id, { webformatURL }]) => (
        <SearchResult key={id} id={id} src={webformatURL} />
      ))}
    </div>
  );
}
