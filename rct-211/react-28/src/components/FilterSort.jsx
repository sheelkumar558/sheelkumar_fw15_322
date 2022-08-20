import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getBooks } from "../redux/action";

const FilterSort = () => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
  
   const urlCatagory = searchParams.get("catagory");
  const urlSort = searchParams.get("sortBy");
  const [catagory, setCatagory] = useState(urlCatagory || []);
  const [sortBy, setSortBy] = useState(urlSort || "");
 const handleCheckbox = (e) => {
    const option = e.target.value;
    let newCatagory = [...catagory];
    if (catagory.includes(option)) {
      newCatagory.splice(newCatagory.indexOf(option), 1);
    } else {
      newCatagory.push(option);
    }
    setCatagory(newCatagory);
  };
  const handleSort =(e)=>{
    setSortBy(e.target.value);
  }
  useEffect(() => {
    if (catagory || sortBy) {
      let params = {};
      catagory && (params.catagory = catagory);
      sortBy && (params.sortBy = sortBy );
      setSearchParams({ catagory });
      //dispatch(getBooks({params:{catagory}}));
    }
  }, [catagory,dispatch, setSearchParams]);
  // useEffect(()=>{
  //   if(sortBy){
  //       const params = {
  //           catagory: searchParams.getAll("catagory"),
  //           sortBy,
  //       };
        // const getBooksParams ={
        //     params:{
        //         catagory:searchParams.getAll("catagory"),
        //         _sort:"release_year",
        //         _order:sortBy,
        //     },
        // }
      //console.log(getBooksParams);
       // setSearchParams(params);
        //dispatch(getBooks(getBooksParams));
  //   }
  // },[searchParams,dispatch,setSearchParams,sortBy]);
  //console.log(sortBy);
  return (
    <div>
      <h3>Filter</h3>
      <div>
        <div>
          <input
            type="checkbox"
            onChange={handleCheckbox}
            value="Novel"
            defaultChecked={catagory.includes("Novel")}
          />
          <label htmlFor="">Novel</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handleCheckbox}
            value="Science_Fiction"
            defaultChecked={catagory.includes("Science_Fiction")}
          />
          <label htmlFor="">Science_Fiction</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handleCheckbox}
            value="thriller"
            defaultChecked={catagory.includes("thriller")}
          />
          <label htmlFor="">Thriller</label>
        </div>
      </div>
      <h3>Sort</h3>
      <div onChange={handleSort}>
        <input
          type="radio"
          value="asc"
          
          name="sortBy"
          defaultChecked={sortBy === "asc"}
         
        />{" "}
        Asending
        <input
          type="radio"
          value="dese"
          
          name="sortBy"
          defaultChecked={sortBy === "desc"}
          
        />{" "}
        Desending
      </div>
    </div>
  );
};

export default FilterSort;
