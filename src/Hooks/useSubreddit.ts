import React, { useState, useEffect } from "react";
import axios from "axios";

function useSubreddit() {
  const [subredditData, setSubredditData] = useState([{ id: 0, title: "", description: "" }]);
  const [loadingSubbredits, setLoadingSubreddits] = useState(false);
  const [subredditError, setSubredditError] = useState(null);
  const url = "https://6040c786f34cf600173c8cb7.mockapi.io/subreddits";

  useEffect(() => {
    setLoadingSubreddits(true);
    axios
      .get(url)
      .then((response) => {
        setSubredditData(response.data);
      })
      .catch((err) => {
        setSubredditError(err);
      })
      .finally(() => setLoadingSubreddits(false));
  }, [url]);

  return { subredditData, loadingSubbredits, subredditError };
}

export default useSubreddit;
