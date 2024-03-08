import React from 'react';

const Table = ({ data }) => {
  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
        <tr>
          <th style={{ padding: '8px', borderColor: '#DEE2E6', fontWeight: '700' }}>#</th>
          <th style={{ padding: '8px', borderColor: '#DEE2E6', fontWeight: '700' }}>Place Name</th>
          <th style={{ padding: '8px', borderColor: '#DEE2E6', fontWeight: '700' }}>Country</th>
        </tr>
      </thead>
      <tbody>
        {data.length ? (
          data.map((item, index) => (
            <tr key={item.id}>
              <td style={{ padding: '8px', borderColor: '#DEE2E6' }}>{index + 1}</td>
              <td style={{ padding: '8px', borderColor: '#DEE2E6' }}>{item.name}</td>
              <td style={{ padding: '8px', borderColor: '#DEE2E6' }}>{item.country}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3" style={{ padding: '8px', borderColor: '#DEE2E6' }}>No result found</td>
          </tr>
        )}
      </tbody>
    </table>
    </div>
  );
};

export default Table;
