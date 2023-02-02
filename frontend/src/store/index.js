import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import UX from './UX';
import images from './images';

export default configureStore({
  middleware: [thunk],
  reducer: {
    UX,
    images
  }
});
