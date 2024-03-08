import React from 'react';

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Place Name</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {data.length ? (
          data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.country}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3">{data === null ? 'Start searching' : 'No result found'}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
