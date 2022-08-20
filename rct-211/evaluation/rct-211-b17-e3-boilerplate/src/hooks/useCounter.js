import { useState } from "react";

export const useCounter = (init) => {
    const [count,setCount] = useState(0);
      const incCount=(value)=>{
       setCount(count+value);
     }
     const decCount=(value)=>{
        setCount(count-value);
      }
   return {count,incCount,decCount};
};
