import { useEffect } from "react";
import { useState } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res.items);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, [url]);
  return {
    loading,
    data,
    error,
  };
};

