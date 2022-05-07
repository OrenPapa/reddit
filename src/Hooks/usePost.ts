import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Posts } from "../Types/Posts";

function useSubreddit(url: string) {
  const [postData, setPostData] = useState<Posts>();
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [postsError, setPostsError] = useState(null);
  const { subredditId } = useParams();

  useEffect(() => {
    setLoadingPosts(true);
    axios
      .get(url)
      .then((response) => {
        setPostData(response.data);
      })
      .catch((err) => {
        setPostsError(err);
      })
      .finally(() => setLoadingPosts(false));
  }, [url]);

  return { postData, loadingPosts, postsError };
}

export default useSubreddit;
