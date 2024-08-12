import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (query) {
      fetchResults(query);
    }
  }, [query]);

  const fetchResults = async (searchQuery) => {
    try {
      const sampleData = [
        { id: 1, name: 'Handcrafted Vase', description: 'A beautiful handmade vase' },
        { id: 2, name: 'Artisan Jewelry', description: 'Unique artisan jewelry piece' },
        { id: 3, name: 'Pottery Bowl', description: 'Crafted with care' },
        { id: 4, name: 'Ceramic Plate', description: 'Elegant ceramic plate' }
      ];

      const filteredResults = sampleData.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setResults(filteredResults);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className="search-results">
      <h2>Search Results for: {query}</h2>
      {results.length > 0 ? (
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
