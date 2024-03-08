import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Components/Table';
import Pagination from './Components/Pagination';
import DataLimitInput from './Components/DataLimitInput';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(5); // Default limit is 5

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
        params: {countryIds: 'IN', namePrefix: searchTerm, limit: limit},
        headers: {
          'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
          'x-rapidapi-key': '4ac5e3352fmshe6ac515ca3b8ccap1f0045jsnf0a504a87bbe'
        }
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data);
        setData(response?.data?.data);
        setTotalPages(Math.ceil(response?.data?.metadata?.totalCount / limit));
      }).catch(function (error) {
        console.error(error);
      });
    };

    fetchData();
  }, [searchTerm, currentPage, limit]);

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setSearchTerm(e.target.value);
      setCurrentPage(1);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleLimitChange = (value) => {
    setLimit(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onKeyPress={handleSearch}
      />
      <Table data={data} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <DataLimitInput limit={limit} onLimitChange={handleLimitChange} />
    </div>
  );
};

export default App;
