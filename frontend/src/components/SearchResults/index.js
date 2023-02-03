import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchResult from './SearchResult';

import './search-results.css';
import { lockLoading, unlockLoading } from '../../store/UX/loading';
import { enableSearch } from '../../store/images/query/query-action-creators';

export default function SearchResults () {
  const dispatch = useDispatch();

  const results = useSelector(state => state.images.display.results);
  const loaded = useSelector(state => state.images.display.loaded);

  useEffect(() => {
    // if (!loaded) {
    //   dispatch(lockLoading('search results'));
    // } else {
    //   dispatch(unlockLoading('search results'));
    // }
  }, [dispatch, loaded]);

  useEffect(() => {
    // dispatch(enableSearch());
  }, [dispatch]);

  return (
    <div id='search-results-container'>
      {Object.entries(results).map(([id, { webformatURL }]) => (
        <SearchResult key={id} id={id} src={webformatURL} />
      ))}
    </div>
  );
}
