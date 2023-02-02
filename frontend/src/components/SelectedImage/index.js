import React from 'react';
import { useSelector } from 'react-redux';

import './selected-image.css';

export default function SelectedImage () {
  const image = useSelector(state => state.images.display.current);

  return image && (
    <div id='selected'>
      <img id='selected-image' src={image.webformatURL} />
      <div id='selected-details'>
        <div id='selected-tags'>
          {image.tags
            ? image.tags.split(', ').map(tag => (
              <span key={tag} className='image-tag'>{tag}</span>
            ))
            : null}
        </div>
        <div id='selected-user'>
          <img src={image.userImageURL} alt={`Profile picture for user ${image.user}`} />
          <span id='user-name'>
            {image.user}
          </span>
        </div>
      </div>
    </div>
  );
}
