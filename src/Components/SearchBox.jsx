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
      value={query}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      placeholder="Search..."
    />
  );
};

export default SearchBox;
