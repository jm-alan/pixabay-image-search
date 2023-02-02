import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import './loading.css';

export default function PageLoading () {
  const lock = useSelector(state => state.UX.loading.lock);

  useEffect(() => {
    const tempLoading = document.getElementById('loading-temp');
    if (tempLoading) {
      tempLoading.parentElement.removeChild(tempLoading);
    }
  }, []);

  return (lock > 0)
    ? (
      <div id='loading'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          style={{
            margin: 'auto',
            background: 'rgba(0, 0, 0, 0)',
            display: 'block',
            shapeRendering: 'auto'
          }}
          width='200px'
          height='200px'
          viewBox='0 0 100 100'
          preserveAspectRatio='xMidYMid'
        >
          <rect
            x='17.5'
            y='30'
            width='20'
            height='80'
            fill='hsl(6, 77%, 57%)'
          >
            <animate
              attributeName='y'
              repeatCount='indefinite'
              dur='1s'
              calcMode='spline'
              keyTimes='0;0.5;1'
              values='18;30;30'
              keySplines='0 0.5 0.5 1;0 0.5 0.5 1'
              begin='-0.2s'
            />
            <animate
              attributeName='height'
              repeatCount='indefinite'
              dur='1s'
              calcMode='spline'
              keyTimes='0;0.5;1'
              values='64;40;40'
              keySplines='0 0.5 0.5 1;0 0.5 0.5 1'
              begin='-0.2s'
            />
          </rect>
          <rect
            x='42.5'
            y='30'
            width='20'
            height='80'
            fill='hsl(6 77% 65%)'
          >
            <animate
              attributeName='y'
              repeatCount='indefinite'
              dur='1s'
              calcMode='spline'
              keyTimes='0;0.5;1'
              values='21;30;30'
              keySplines='0 0.5 0.5 1;0 0.5 0.5 1'
              begin='-0.1s'
            />
            <animate
              attributeName='height'
              repeatCount='indefinite'
              dur='1s'
              calcMode='spline'
              keyTimes='0;0.5;1'
              values='58;40;40'
              keySplines='0 0.5 0.5 1;0 0.5 0.5 1'
              begin='-0.1s'
            />
          </rect>
          <rect
            x='67.5'
            y='30'
            width='20'
            height='80'
            fill='hsl(6 77% 73%)'
          >
            <animate
              attributeName='y'
              repeatCount='indefinite'
              dur='1s'
              calcMode='spline'
              keyTimes='0;0.5;1'
              values='21;30;30'
              keySplines='0 0.5 0.5 1;0 0.5 0.5 1'
            />
            <animate
              attributeName='height'
              repeatCount='indefinite'
              dur='1s'
              calcMode='spline'
              keyTimes='0;0.5;1'
              values='58;40;40'
              keySplines='0 0.5 0.5 1;0 0.5 0.5 1'
            />
          </rect>
        </svg>
      </div>
      )
    : null;
}
