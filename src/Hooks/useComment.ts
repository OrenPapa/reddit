import React, { useState, useEffect } from "react";
import axios from "axios";
import { Comments } from "../Types/Comments";

function useComment(url: string) {
  const [commentsData, setCommentsData] = useState<Comments>();
  const [loadingComments, setLoadingComments] = useState(false);
  const [commentsError, setCommentsError] = useState(null);

  useEffect(() => {
    setLoadingComments(true);
    axios
      .get(url)
      .then((response) => {
        setCommentsData(response.data);
      })
      .catch((err) => {
        setCommentsError(err);
      })
      .finally(() => setLoadingComments(false));
  }, [url]);

  return { commentsData, loadingComments, commentsError };
}

export default useComment;
