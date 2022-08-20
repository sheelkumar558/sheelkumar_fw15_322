import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const useDebounce = (value,delay) => {
    const [dValue,setdValue] = useState(value);
    useEffect(()=>{
       let newDebounceId = setTimeout(()=>{
          setdValue(value);
       },delay);
       return ()=>{
        clearInterval(newDebounceId);
       }
    },[delay,value]);
  return dValue;
}

export default useDebounce;