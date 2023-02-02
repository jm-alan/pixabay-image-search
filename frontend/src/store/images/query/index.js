/* eslint-disable camelcase */
import * as types from './query-action-types';

export default function reducer (
  state = {
    configuration: {
      q: '',
      lang: 'en',
      id: false,
      image_type: '',
      orientation: 'all',
      category: '',
      min_width: 0,
      min_height: 0,
      colors: [],
      editors_choice: false,
      safesearch: true,
      order: 'popular',
      page: 1,
      per_page: 20
    },
    enabled: false
  },
  {
    type,
    q,
    lang,
    image_type,
    orientation,
    category,
    min_width,
    min_height,
    colors,
    order,
    page,
    per_page
  }
) {
  switch (type) {
    case types.QUERY:
      return {
        ...state,
        configuration: {
          ...state.configuration,
          q
        }
      };
    case types.LANGUAGE:
      return {
        ...state,
        configuration: {
          ...state.configuration,
          lang
        }
      };
    case types.TOGGLE_ID:
      return {
        ...state,
        configuration: {
          ...state.configuration,
          id: !state.configuration.id
        }
      };
    case types.IMAGE_TYPE:
      return {
        ...state,
        configuration: {
          ...state.configuration,
          image_type
        }
      };
    case types.ORIENTATION:
      return {
        ...state,
        configuration: {
          ...state.configuration,
          orientation
        }
      };
    case types.CATEGORY:
      return {
        ...state,
        configuration: {
          ...state.configuration,
          category
        }
      };
    case types.MIN_WIDTH:
      return {
        ...state,
        configuration: {
          ...state.configuration,
          min_width
        }
      };
    case types.MIN_HEIGHT:
      return {
        ...state,
        configuration: {
          ...state.configuration,
          min_height
        }
      };
    case types.COLORS:
      return {
        ...state,
        configuration: {
          ...state.configuration,
          colors
        }
      };
    case types.TOGGLE_EDITORS_CHOICE:
      return {
        ...state,
        configuration: {
          ...state.configuration,
          editors_choice: !state.configuration.editors_choice
        }
      };
    case types.TOGGLE_SAFE_SEARCH:
      return {
        ...state,
        configuration: {
          ...state.configuration,
          safesearch: !state.configuration.safesearch
        }
      };
    case types.TOGGLE_ORDER:
      return {
        ...state,
        configuration: {
          ...state.configuration,
          order: state.configuration.order === 'popular' ? 'latest' : 'popular'
        }
      };
    case types.PAGE:
      return {
        ...state,
        configuration: {
          ...state.configuration,
          page
        }
      };
    case types.PER_PAGE:
      return {
        ...state,
        configuration: {
          ...state.configuration,
          per_page
        }
      };
    case types.ENABLE:
      return {
        ...state,
        enabled: true
      };
    case types.DISABLE:
      return {
        ...state,
        enabled: false
      };
    default:
      return state;
  }
}
