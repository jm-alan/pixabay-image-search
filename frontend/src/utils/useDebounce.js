import { useCallback, useRef } from 'react';

export default function useDebounce (fn, ms, deps = []) {
  const timeoutRef = useRef(null);

  return useCallback((...args) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(fn, ms, ...args);
  }, [...deps, ms]);
}
