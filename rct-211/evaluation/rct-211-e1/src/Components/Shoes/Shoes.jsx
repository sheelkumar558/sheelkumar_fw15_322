import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getShoesFailure,
  getShoesRequest,
  getShoesSuccess,
} from "../../Redux/action";
import ShoeCard from "./ShoeCard/ShoeCard";

import styles from "./shoe.module.css";

const Shoes = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.shoes);

  const getdata = () => {
    dispatch(getShoesRequest());

    axios
      .get("")
      .then((res) => dispatch(getShoesSuccess(res.data)))
      .catch((er) => dispatch(getShoesFailure));
  };

  const updateCounte = ({ data, val }) => {
    console.log(data, val);
    axios
      .patch(`/${data.id}`, { ...data, cart_quantity: val })
      .then((res) => getdata());
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className={styles.main}>
      {data.map((e) => (
        <div key={e.id}>
          <ShoeCard data={e} updateCounte={updateCounte}></ShoeCard>
        </div>
      ))}

      {/* Map through the shoes list here */}
    </div>
  );
};

export default Shoes;
