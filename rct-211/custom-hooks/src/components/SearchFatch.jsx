import React from "react";
import { useState } from "react";
import { useFetch } from "../Hook/CustomsHooks";
const SearchFatch = () => {
  const [query, setQuery] = useState("");
  const [page,setPage] = useState(1);
  const { loading, data, error } = useFetch(
    `https://api.github.com/search/users?q=${query || "masai"}&&page=${page}`
  );
 console.log(loading,data,error,page);
 const handleData =(value)=>{
   if(page+value < 1 || data.incomplete_results ){
    return false;
   }
   setPage(page+value);
 }
  return (
    <div>
      <h1>Github user search</h1>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button>Search</button>
      <br />
      <button onClick={()=>handleData(1)}>Prev</button>
      <button onClick={()=>handleData(-1)}>Next</button>
      <br />
      {loading && 'LOADING'}
      {data?.length > 0 && data.map(item=> 
        <div key={item.id}>{item.login}</div>
        )}
    </div>
  );
};

export default SearchFatch;
