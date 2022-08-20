import React from "react";
import { useEffect } from "react";

const UseDebunceCall = (func, delay) => {
  useEffect(() => {
    let newDebunce = setTimeout(() => {
      func();
    }, delay);
    return () => {
      clearInterval(newDebunce);
    };
  }, [delay, func]);
  return <div></div>;
};

export default UseDebunceCall;
