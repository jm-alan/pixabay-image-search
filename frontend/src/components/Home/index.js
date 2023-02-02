import React from 'react';
import Search from '../Search';
import SearchResults from '../SearchResults';

import './home.css';

export default function Home () {
  return (
    <div id='home-container'>
      <Search />
      <SearchResults />
    </div>
  );
}
