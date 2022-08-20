import React from "react";
import { useEffect } from "react";
import styled from "styled-components";

import BookList from "../components/BookList";
import FilterSort from "../components/FilterSort";


const Books = () => {
  // const [searchParams] =useSearchParams();  
  // const dispatch = useDispatch();
  // const books = useSelector((state) => state.books);
  // useEffect(() => {
  //   const urlCatagory= searchParams.getAll("catagory");
  //   const urlSort = searchParams.get("sortBy");
  //   if (books.length === 0 && (!urlCatagory || !urlSort)) {
  //     dispatch(getBooks());
  //   }
  // }, []);
 
  return (
    <div>
      <h2>Books</h2>
      <BookPageWrapper>
        <FilterSortWrapper>
          <FilterSort />
        </FilterSortWrapper>
        <BookListWspper>
          <BookList  />
        </BookListWspper>
      </BookPageWrapper>
    </div>
  );
};

export default Books;

const BookPageWrapper = styled.div`
  display: flex;
`;
const FilterSortWrapper = styled.div`
  width: 300px;
  border: 1px solid red;
`;
const BookListWspper = styled.div`
  border: 1px solid red;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, max-content));
  grid-gap:16px ;
  justify-content: center;
  padding: initial ;
`;
