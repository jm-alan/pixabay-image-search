import { useCallback, useState } from 'react';

export default function useThrottle (fn, ms, deps = []) {
  const [canInvoke, setCanInvoke] = useState(true);

  return useCallback((...args) => {
    if (!canInvoke) return;
    setCanInvoke(false);
    fn(...args);
    setTimeout(() => setCanInvoke(true), ms);
  }, [...deps, canInvoke, ms]);
}
