import React, { useState } from "react";

const Search = ({ data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState("");
  const handleFilter = (query) => {
    const searchWord = query.target.value;
    setQuery(searchWord);
    const newFilter = data.filter((value) => {
      return value.country.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  console.log(filteredData);
  return (
    <div>
      <h1>Search Bar</h1>
      <input
        type="text"
        placeholder="search country name"
        value={query}
        onChange={handleFilter}
      />
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return <p>{value.country} </p>;
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
