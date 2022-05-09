import React, { useState, useEffect } from "react";
import axios from "axios";
import { Subreddit, Subreddits, SubredditsResponse } from "../Types/Subreddits";
import { useDispatch } from "react-redux";
import { setSubredditsData } from "../Redux/SubredditSlice";

function useSubreddit(pageNumber: number) {
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
        dispatch(setSubredditsData(response.data))
        setHasMore(response.data.length > 0);
        setLoadingSubreddits(false);
      })
      .catch((err) => {
        setSubredditError(err);
      });
  }, [url]);

  return { loadingSubbredits, subredditError, hasMore };
}

export default useSubreddit;
