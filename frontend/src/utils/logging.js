import { useEffect } from 'react';

export const devlog = process.env.NODE_ENV === 'development' ? console.log.bind(window.console) : () => {};

export const devwarn = process.env.NODE_ENV === 'development' ? console.warn.bind(window.console) : () => {};

export const deverr = process.env.NODE_ENV === 'development' ? console.error.bind(window.console) : () => {};

const sortComparator = [1, 1];

/**
 * Takes in an object of key-value pairs representing values to be tracked
 * and their respective labels, triggering a log every time any of the values
 * changes.
 *
 * This function is expensive, and should be removed before pushing to production.
 *
 * @param {object} argObject
 */
export const useLogger = (argObject) => {
  const vals = Object.entries(argObject).sort(([lKey], [rKey]) => sortComparator[rKey > lKey]);

  useEffect(() => devlog(argObject), vals);
};
