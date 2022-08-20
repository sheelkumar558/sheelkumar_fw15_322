import React,{useEffect} from "react";
import BookCard from "./BookCard";
import styled from "styled-components";
import { getBooks } from "../redux/action";
import { useSearchParams,useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const BookList = () => {
  const [searchParams] =useSearchParams();  
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const location = useLocation();
  useEffect(() => {
   
    if (books.length === 0 || location.search ) {
     const sortBy = searchParams.get('sortBy'); 
      const getBooksParams ={
        params:{
            catagory:searchParams.getAll("catagory"),
            _sort: sortBy && "release_year",
            _order:sortBy,
        },
    }
    console.log(getBooksParams);
      dispatch(getBooks(getBooksParams));
    }
  }, [location.search]);
  console.log();
  return (
    <>
      {books.length > 0 &&
        books.map((singalBook) => {
          return (
            <BookCartWepper key={singalBook.id}>
              <BookCard bookData={singalBook} />
            </BookCartWepper>
          );
        })}
    </>
  );
};

export default BookList;

const BookCartWepper = styled.div`
  border: 1px solid blue;
  padding:5px ;
  width: 310px;
`;
