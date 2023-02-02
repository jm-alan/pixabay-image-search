import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { enableSearch, setQueryText } from '../../store/images/query/query-action-creators';

export default function Search () {
  const dispatch = useDispatch();

  const [query, updateQuery] = useState('');

  const handleSearch = e => {
    e.preventDefault();
    console.log('you searched!');
    dispatch(setQueryText(query));
    dispatch(enableSearch());
  };

  return (
    <div id='searchbar-container'>
      <form
        id='searchbar'
        onSubmit={handleSearch}
      >
        <input
          id='searchbar-text'
          type='text'
          placeholder='What would you like to see more of in the world?'
          onChange={({ target: { value } }) => updateQuery(value)}
        />
        <button
          id='searchbar-submit'
          type='submit'
        >
          <span className='material-symbols-outlined'>
            search
          </span>
        </button>
      </form>
    </div>
  );
}
