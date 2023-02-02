import React from 'react';
import Search from '../Search';
import SearchConfig from '../SearchConfig';
import SearchResults from '../SearchResults';

import './home.css';

export default function Home () {
  return (
    <div id='home-container'>
      <Search />
      <SearchConfig />
      <SearchResults />
    </div>
  );
}
