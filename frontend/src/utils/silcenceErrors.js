import { deverr } from './logging';

/**
 *  A utility function for silencing expected erroneous output in production,
 * such as attempting to decode an empty JSON response
 */
export const silenceAsync = async fn => {
  try {
    return await fn();
  } catch (err) {
    deverr(err);
  }
};

/**
 * A utility function for silencing expected erroneous output in production,
 * such as attempting to destructure a conditionally extant object
 */
export const silenceSync = fn => {
  try {
    return fn();
  } catch (err) {
    deverr(err);
  }
};
