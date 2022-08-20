
import { useEffect } from "react";
import { useState } from "react";

const useTimeOut = (delay) => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => {
      setReady(timer);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay]);
  return ready;
};

export default useTimeOut;
