import React, { lazy, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useDispatch } from 'react-redux';

import Lazy from './components/Loading/Lazy';
import PageLoading from './components/Loading/PageLoading';
import store from './store';
import csrfetch from './utils/csrfetch';
import { setMooring } from './store/UX/modal';

import './utils/prototypes';

const App = lazy(() => import('./App'));
const ErrorBanner = lazy(() => import('./components/ErrorBanner'));

if (process.env.NODE_ENV === 'development') {
  window.store = store;
  window.csrfetch = csrfetch;
}

const Root = () => {
  const dispatch = useDispatch();

  const mooringRef = useRef(null);

  useEffect(() => {
    dispatch(setMooring(mooringRef.current));
  }, [dispatch, mooringRef]);

  return (
    <>
      <Lazy>
        <ErrorBanner />
      </Lazy>
      <Lazy>
        <App />
      </Lazy>
      <PageLoading />
      <div ref={mooringRef} id='mooring' />
    </>
  );
};

const concurrentRoot = createRoot(document.getElementById('react-root'));
concurrentRoot.render(
  <Provider store={store}>
    <Root />
  </Provider>
);
