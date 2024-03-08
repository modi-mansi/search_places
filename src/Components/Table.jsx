import React from 'react';

const Table = ({ data,searchTerm,search }) => {
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
        {
        
        search&& data.length ? (
          data.map((item, index) => (
            <tr key={item.id}>
              {console.log("<<<<country",item)}
              <td style={{ padding: '8px', borderColor: '#DEE2E6' }}>{index + 1}</td>
              <td style={{ padding: '8px', borderColor: '#DEE2E6' }}>{item.name}</td>
              <td style={{ padding: '8px', borderColor: '#DEE2E6' }}> {item.country ? (
                  <>
                                    {"   " +item?.country}

                  <img
                    src={`https://flagsapi.com/${item.countryCode}/flat/64.png`}
                    alt={item.country}
                    style={{ width: '24px', height: 'auto' }}
                  />
                  </>
                ) : (
                  'No flag available'

                  
                )}</td>
            </tr>
          ))
        ) :data?.length===0?
          <tr>
            <td colSpan="3" style={{ padding: '8px', borderColor: '#DEE2E6' }}>No result found</td>
          </tr>
          :
          !search&&<tr>
            <td colSpan="3" style={{ padding: '8px', borderColor: '#DEE2E6' }}>Start Searching...</td>
          </tr>

        }
      </tbody>
    </table>
    </div>
  );
};

export default Table;
