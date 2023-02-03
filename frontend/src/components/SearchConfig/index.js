import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Dropdown from './Dropdown';
import { setCategory, setImageType, setLanguage, setOrder, setOrientation } from '../../store/images/query/query-action-creators';
import { languages, categories, imageTypes, orientations, orders } from './config-contsants';

import './search-config.css';

export default function SearchConfig () {
  const dispatch = useDispatch();

  const configuration = useSelector(state => state.images.query.configuration);
  console.log('search config', configuration);

  const createValueSetter = (stateSetter, exclusion, exclusionOverwrite) => val => dispatch(
    stateSetter(
      val === exclusion
        ? exclusionOverwrite
        : val
    )
  );

  return (
    <div id='search-config'>
      <Dropdown
        entries={languages.map(lang => [lang.toUpperCase(), lang])}
        onChangeValue={createValueSetter(setLanguage)}
      />
      <Dropdown
        entries={categories.map(cat => [cat.upperCaseFirst(), cat])}
        onChangeValue={createValueSetter(setCategory, 'all categories', '')}
      />
      <Dropdown
        entries={imageTypes.map(type => [type.upperCaseFirst(), type])}
        onChangeValue={createValueSetter(setImageType, 'all image types', 'all')}
      />
      <Dropdown
        entries={orientations.map(orient => [orient.upperCaseFirst(), orient])}
        onChangeValue={createValueSetter(setOrientation, 'all orientations', 'all')}
      />
      <Dropdown
        entries={orders.map(order => [order.upperCaseFirst(), order])}
        onChangeValue={createValueSetter(setOrder)}
      />
    </div>
  );
}
