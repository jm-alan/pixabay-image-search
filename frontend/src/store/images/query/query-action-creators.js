/* eslint-disable camelcase */
import * as types from './query-action-types';

export const selectImage = {};

export const setQuery = q => ({
  type: types.QUERY,
  q
});

export const setLanguage = lang => ({
  type: types.LANGUAGE,
  lang
});

export const toggleID = () => ({
  type: types.TOGGLE_ID
});

export const setImageType = image_type => ({
  type: types.IMAGE_TYPE,
  image_type
});

export const setOrientation = orientation => ({
  type: types.ORIENTATION,
  orientation
});

export const setCategory = category => ({
  type: types.CATEGORY,
  category
});

export const setMinWidth = min_width => ({
  type: types.MIN_WIDTH,
  min_width
});

export const setMaxWidth = max_width => ({
  type: types.MAX_WIDTH,
  max_width
});

export const setColors = colors => ({
  type: types.COLORS,
  colors
});

export const toggleEditorsChoice = () => ({
  type: types.TOGGLE_EDITORS_CHOICE
});

export const toggleSafeSearch = () => ({
  type: types.TOGGLE_SAFE_SEARCH
});

export const toggleOrder = () => ({
  type: types.TOGGLE_ORDER
});

export const setPage = page => ({
  type: types.PAGE,
  page
});

export const setPerPage = per_page => ({
  type: types.PER_PAGE,
  per_page
});
