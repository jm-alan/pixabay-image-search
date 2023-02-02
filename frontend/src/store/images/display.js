import csrfetch from '../../utils/csrfetch';

const RESULTS = 'display/RESULTS';
const TOTAL = 'display/TOTAL';
const HITS = 'display/HITS';
const SELECT = 'display/SELECT';
const DESELECT = 'display/DESELECT';

const setResults = results => ({
  type: RESULTS,
  results
});

const setTotal = total => ({
  type: TOTAL,
  total
});

const setHits = hits => ({
  type: HITS,
  hits
});

export const selectImage = selectedID => ({
  type: SELECT,
  selectedID
});

export const deselectImage = () => ({
  type: DESELECT
});

export const getResults = query => async dispatch => {
  const {
    data: {
      total,
      totalHits,
      hits
    },
    rateLimit,
    requestsRemaining,
    resetTimer
  } = await csrfetch.post('/api/queries/', query);

  dispatch(setResults(hits));
  dispatch(setTotal(total));
  dispatch(setHits(totalHits));
};

export default function reducer (
  state = { results: {}, total: 0, hits: 0, current: null },
  { type, results, total, hits, selectedID }
) {
  switch (type) {
    case RESULTS:
      return {
        ...state,
        results
      };
    case TOTAL:
      return {
        ...state,
        total
      };
    case HITS:
      return {
        ...state,
        hits
      };
    case SELECT:
      return {
        ...state,
        current: state.results[selectedID]
      };
    case DESELECT:
      return {
        ...state,
        current: null
      };
    default:
      return state;
  }
}
