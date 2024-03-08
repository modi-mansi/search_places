import React, { useState } from 'react';

const DataLimitInput = ({ limit, onLimitChange }) => {
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      if (value > 10) {
        setError('Limit cannot exceed 10');
      } else {
        setError('');
        onLimitChange(value);
      }
    }
  };

  return (
    <div>
      <label htmlFor="limitInput">Data Limit:</label>
      <input
        id="limitInput"
         max="10"
        value={limit}
        onChange={handleChange}

      />
            {error && <p style={{ color: 'red' }}>{error}</p>}

    </div>
  );
};

export default DataLimitInput;
