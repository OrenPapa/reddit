import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPostsData } from "../Redux/PostsSlice";

function useSubreddit(url: string) {
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [postsError, setPostsError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoadingPosts(true);
    axios
      .get(url)
      .then((response) => {
        dispatch(setPostsData(response.data));
      })
      .catch((err) => {
        setPostsError(err);
      })
      .finally(() => setLoadingPosts(false));
  }, [url]);

  return { loadingPosts, postsError };
}

export default useSubreddit;
