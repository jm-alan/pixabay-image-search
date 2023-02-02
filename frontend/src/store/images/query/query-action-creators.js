/* eslint-disable camelcase */
import * as types from './query-action-types';

export const setQueryText = q => ({
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

export const setMaxWidth = min_height => ({
  type: types.MIN_HEIGHT,
  min_height
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

export const enableSearch = () => ({
  type: types.ENABLE
});

export const disableSearch = () => ({
  type: types.DISABLE
});
