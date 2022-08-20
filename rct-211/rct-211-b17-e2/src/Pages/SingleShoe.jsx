import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getShoes } from "../Redux/AppReducer/action";

const SingleShoe = () => {
  const {id} = useParams();
  const [currentShoes,setCurrentShoes] = useState({});
  const dispatch = useDispatch();
  const shoes = useSelector((state)=>state.app.shoes);
  useEffect(()=>{
    if(shoes?.length === 0){
      dispatch(getShoes);
    }
  },[shoes?.length,dispatch]);

  useEffect(()=>{
   if(id){
    const temp = shoes?.find((shoes)=>shoes.id === Number(id));
  temp && setCurrentShoes(temp);
  }
  },[shoes,id]);
  console.log(currentShoes)
  return (
    <div>
      <h2>Shoe name</h2>
      <div>
        <img width='200px' src={currentShoes?.image} alt="Cover Pic" />
      </div>
      <div>
        <div>{currentShoes?.category}</div>
      </div>
    </div>
  );
};

export default SingleShoe;


