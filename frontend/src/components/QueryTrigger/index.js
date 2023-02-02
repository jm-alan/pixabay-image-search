import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getResults } from '../../store/images/display';
import { disableSearch } from '../../store/images/query/query-action-creators';

export default function QueryTrigger () {
  const dispatch = useDispatch();

  const enabled = useSelector(state => state.images.query.enabled);
  const configuration = useSelector(state => state.images.query.configuration);

  useEffect(() => {
    if (enabled) {
      dispatch(disableSearch());
      dispatch(getResults(configuration));
    }
  }, [dispatch, enabled]);

  return null;
}
