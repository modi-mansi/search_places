// components/SearchBox.js
import React, { useState } from 'react';

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(query);
    }
  };

  return (
    <input
    type="text"
    placeholder="Search..."
    value={query}
    onChange={handleChange}
    onKeyPress={handleKeyPress}
    style={{
      width: '241px',
      height: '38px',
      fontSize: '16px',
      backgroundColor: '#FFFFFF',
      borderColor: '#CED4DA',
      paddingTop: '6px',
      paddingBottom: '6px',
      paddingLeft: '12px',
      borderRadius: '4px',
    }}
  />
  );
};

export default SearchBox;
