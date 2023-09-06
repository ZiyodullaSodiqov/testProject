import React from "react";
import { useState } from "react";
import axios from "axios";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Perform the search logic here and update the searchResults state
    axios
      .get("http://localhost:5000/api/reg/filter", { params: { query } })
      .then((response) => {
        const results = response.data;
        setSearchResults(results);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search..."
      />

      <ul>
        {searchResults?.value?.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
