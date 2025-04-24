import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';

const TypeaheadSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Custom list for search suggestion
  const customList = [
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Pineapple',
    'Grapes',
    'Watermelon',
    'Strawberry',
    'Blueberry',
    'Peach',
  ];

  // Function to simulate API call
  const fetchSearchResults = async (searchQuery) => { 
    try {
      setLoading(true);
      console.log('Searching for:', searchQuery);

      // Replace this URL with your actual API endpoint
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?q=${searchQuery}`);
      
      // If API fails, fall back to custom list
      if (response.data && response.data.length > 0) {
        console.log('API Results:', response.data);
        return response.data.map(item => item.title); // Simulating title as result
      } else {
        console.log('No results from API, using custom list.');
        return customList.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()));
      }
    } catch (error) {
      console.error('Error fetching search results', error);
      return customList.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()));
    } finally {
      setLoading(false);
    }
  };

  // Debounced search function
  // Debounce with useCallback to persist the function across renders
  const debouncedSearch = useCallback(
    debounce(async (searchQuery) => {
      if (searchQuery.trim()) {
        const data = await fetchSearchResults(searchQuery);
        setResults(data);
      } else {
        setResults([]);
      }
    }, 500),
    []
  );

  // Handle input change
  const handleChange = (e) => {
    setQuery(e.target.value);
    debouncedSearch(e.target.value);
  };

  useEffect(() => {
    // Cleanup debounce on unmount
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <div>
      <h1>Typeahead Search</h1>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
        style={{ padding: '8px', width: '300px' }}
      />
      {loading && <p>Loading...</p>}
      <ul className="list-inline text-justify">
        {results.map((item, index) => (
          <li className="list-group-item d-flex justify-content-between align-items-center hover-effect p-1 border" key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TypeaheadSearch;
