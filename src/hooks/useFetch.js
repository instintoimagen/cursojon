import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPendindig, setIsPendindig] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (url) => {
      try {
        let res = await fetch(url);

        if (!res.ok) {
          throw {
            err: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
          };
        }

        let data = await res.json();

        setIsPendindig(false);
        setData(data);
        setError({ err: false });
      } catch (err) {
        setIsPendindig(true);
        setError(true);
      }
    };

    getData(url);
  }, [url]);

  return { data, isPendindig, error };
};
