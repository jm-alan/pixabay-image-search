import React, { Suspense } from 'react';
import LoadingLock from './LoadingLock';

export default function Lazy ({ name, children }) {
  return (
    <Suspense fallback={<LoadingLock name={name} item={children} />}>
      {children}
    </Suspense>
  );
}
