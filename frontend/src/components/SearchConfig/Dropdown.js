import React, { useState } from 'react';

import './dropdown.css';

export default function Dropdown ({ entries, onChangeValue }) {
  const [selectedKey, seSelectedKey] = useState(entries[0][0]);
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`custom-dropdown${expanded ? ' expanded' : ''}`}
      style={{
        height: expanded ? `calc((((var(--dropdown-height) * 0.4) + 0.6rem) * ${entries.length}) + var(--dropdown-height))` : 'var(--dropdown-height)'
      }}
    >
      <div
        className='dropdown-selected'
        onClick={() => setExpanded(exp => !exp)}
      >
        {selectedKey}
      </div>
      <div className='dropdown-items'>
        {entries.map(([key, value]) => (
          <div
            key={key}
            className={`dropdown-item${key === selectedKey ? ' selected' : ''}`}
            onClick={() => {
              seSelectedKey(key);
              setExpanded(false);
              onChangeValue(value);
            }}
          >
            {key}
          </div>
        ))}
      </div>
    </div>
  );
}
