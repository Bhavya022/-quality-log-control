import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import LogList from '../components/LogList';

const Logs = () => {
  // State for storing search term and search results
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle search
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Fetch search results when search term changes
  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/query/search?searchTerm=${searchTerm}`);
        if (!response.ok) {
          throw new Error('Failed to fetch search results');
        }
        const data = await response.json();
        setSearchResults(data.results);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    if (searchTerm.trim() !== '') {
      fetchSearchResults();
    } else {
      setSearchResults([]); // Clear search results if search term is empty
    }
  }, [searchTerm]);

  return (
    <div className="logs-page">
      <h1>Log Query Interface</h1>
      <SearchBar onSearch={handleSearch} />
      <LogList logs={searchResults} />
    </div>
  );
};

export default Logs;
