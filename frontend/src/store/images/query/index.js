/* eslint-disable camelcase */
export default function reducer (
  state = {
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
  {
    type,
    q,
    lang,
    id,
    image_type,
    orientation,
    category,
    min_width,
    min_height,
    colors,
    editors_choice,
    safesearch,
    order,
    page,
    per_page
  }
) {
  switch (type) {
    default:
      return state;
  }
}
