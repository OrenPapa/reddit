import React, { useState, useEffect } from "react";
import axios from "axios";
import { Subreddit, Subreddits, SubredditsResponse } from "../Types/Subreddits";
import { useDispatch } from "react-redux";

function useSubreddit(pageNumber: number) {
  const [subredditData, setSubredditData] = useState<Array<any>>([]);
  const [loadingSubbredits, setLoadingSubreddits] = useState(false);
  const [subredditError, setSubredditError] = useState(null);
  const [hasMore, setHasMore] = useState(false);
  const dispatch = useDispatch();
  const url = `https://6040c786f34cf600173c8cb7.mockapi.io/subreddits?page=${pageNumber}&limit=16`;

  useEffect(() => {
    setLoadingSubreddits(true);
    axios
      .get(url)
      .then((response: SubredditsResponse) => {
        setSubredditData(
          Array.from(new Set([...subredditData, ...response.data]))
        );
        setHasMore(response.data.length > 0);
      })
      .catch((err) => {
        setSubredditError(err);
      })
      .finally(() => setLoadingSubreddits(false));
  }, [url]);

  return { loadingSubbredits, subredditError, subredditData, hasMore };
}

export default useSubreddit;
