import React from 'react';

export default function SearchResult ({ src, id }) {
  return (
    <div className='search-result'>
      <img className='search-result-thumbnail' src={src} />
    </div>
  );
}
