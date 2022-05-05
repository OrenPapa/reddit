import React, { useState, useEffect } from "react";
import axios from "axios";

function useSubreddit(url: string) {
  const [data, setData] = useState([{ id: 0, title: "", description: "" }]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

export default useSubreddit;
