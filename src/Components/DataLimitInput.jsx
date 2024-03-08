import React from 'react';

const DataLimitInput = ({ limit, onLimitChange }) => {
  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      onLimitChange(value);
    }
  };

  return (
    <div>
      <label htmlFor="limitInput">Data Limit:</label>
      <input
        id="limitInput"
        type="number"
        min="1"
        max="10"
        value={limit}
        onChange={handleChange}
      />
    </div>
  );
};

export default DataLimitInput;
