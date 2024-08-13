import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (query) {
      fetchResults(query);
    }
  }, [query]);

  const fetchResults = async (searchQuery) => {
    setLoading(true); // Start loading
    try {
      const endpoints = [
        'http://localhost:5000/decor',
        'http://localhost:5000/handcraft',
        'http://localhost:5000/view',
        'http://localhost:5000/jewel',
        'http://localhost:5000/gift'
      ];

      // Fetch all data
      const allResults = await Promise.all(endpoints.map(endpoint => 
        fetch(endpoint)
          .then(res => {
            if (!res.ok) {
              throw new Error(`Failed to fetch from ${endpoint}`);
            }
            return res.json();
          })
      ));

      console.log("Raw results from APIs:", allResults);

      // Combine and filter the results
      const mergedResults = allResults.flat(); // Combine results from all APIs

      console.log("Merged results:", mergedResults);

      const filteredResults = mergedResults.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      console.log("Filtered results:", filteredResults);

      setResults(filteredResults);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="search-results">
      <h2>Search Results for: {query}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : results.length > 0 ? (
        <ul>
          {results.map(result => (
            <li key={result.id}>
              <h3>{result.name}</h3>
              <p>{result.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found for "{query}".</p>
      )}
    </div>
  );
};

export default SearchResults;
