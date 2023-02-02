import React, { lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import TempLoadingPruner from './components/TempLoadingPruner';
import Lazy from './components/Loading/Lazy';

import './index.css';

const Home = lazy(() => import('./components/Home'));
const Modal = lazy(() => import('./components/Modal'));

export default function App () {
  return (
    <>
      <BrowserRouter>
        <div id='main'>
          <div id='router-container'>
            <Routes>
              <Route
                path='/' element={(
                  <Lazy name='home'>
                    <Home />
                  </Lazy>
                )}
              />
              <Route path='*' element={<Navigate to='home' />} />
            </Routes>
          </div>
        </div>
        <Lazy name='modal'>
          <Modal />
        </Lazy>
      </BrowserRouter>
      <TempLoadingPruner />
    </>
  );
}
