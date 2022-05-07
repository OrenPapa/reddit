import React, { useState, useEffect } from "react";
import axios from "axios";

function useComment(url: string) {
  const [CommentsData, setCommentsData] = useState([{ id: 0, postId: "", name: "", body: "" }]);
  const [loadingComments, setLoadingComments] = useState(false);
  const [CommentsError, setCommentsError] = useState(null);

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

  return { CommentsData, loadingComments, CommentsError };
}

export default useComment;
