import React from 'react';
import { useDispatch } from 'react-redux';

import { setModal, showModal } from '../../store/UX/modal';
import { selectImage } from '../../store/images/display';
import SelectedImage from '../SelectedImage';

export default function SearchResult ({ src, id }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(selectImage(id));
    dispatch(setModal(SelectedImage));
    dispatch(showModal());
  };

  return (
    <div
      className='search-result'
      onClick={handleClick}
    >
      <img className='search-result-thumbnail' src={src} />
    </div>
  );
}
