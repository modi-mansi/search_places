import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Components/Table';
import Pagination from './Components/Pagination';
import DataLimitInput from './Components/DataLimitInput';
import Spinner from './Components/Spinner';



const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(3); // Default limit is 3
  const [loading, setLoading] = useState(false); // State to track loading status
  const [search, setSearch] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const options = {
      method: 'GET',
      url: process.env.REACT_APP_API_ENDPOINT,
      params: {countryIds: process.env.REACT_APP_COUNTRY_ID, namePrefix: searchTerm, limit: limit},
      headers: {
        'x-rapidapi-host': process.env.REACT_APP_X_RAPID_API_HOST,
        'x-rapidapi-key': process.env.REACT_APP_X_RAPID_API_KEY
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
      setData(response?.data?.data);
      setTotalPages(Math.ceil(response?.data?.metadata?.totalCount / limit));
      setLoading(false); // Set loading to false when data is fetched

    }).catch(function (error) {
      console.error(error);
      setLoading(false); // Set loading to false when data is fetched

    });
  };

  useEffect(() => {
    const debounceSearch = setTimeout(() => {
      if(search && setSearchTerm?.length>0){
        fetchData();
      }
    }, 500); // Adjust the delay as needed (e.g., 500 milliseconds)

    return () => clearTimeout(debounceSearch);
  }, [searchTerm, currentPage, limit,fetchData,search]);

useEffect(() => {
  fetchData()
}, [ fetchData])


  const handleSearch = (e) => {
    let value=e.target.value
   if(value && (value === null || value === undefined || /^\s*$/.test(value))){
    setSearchTerm();
    setSearch(false)
   }
    else   {
      setSearchTerm(value);
      setCurrentPage(1);
       setSearch(true)
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
            {loading ? <Spinner /> : null} {/* Render Spinner when loading */}

      <Table data={data} searchTerm={searchTerm} search={search}/>
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
