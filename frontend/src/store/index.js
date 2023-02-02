import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import UX from './UX';

export default configureStore({
  middleware: [thunk],
  reducer: {
    UX
  }
});
