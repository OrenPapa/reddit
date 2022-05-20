import axios from "axios";
import { url } from "inspector";
import React, { createContext, useEffect, useState } from "react";
import { Comment } from "../Types/Comments";
import { ChildrenType } from "../Types/ProviderChildrenType";

type InitialState = {
  commentsData?: Comment[];
  commentsLoading?: boolean;
  commentsError?: boolean;
  getcomments?: (arg0: string) => void;
};

export const CommentContext = createContext<InitialState>({});

export const CommetnContextProvider = ( {children} :ChildrenType) => {
  const [Data, setData] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const useComments = (url: string) => {
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
  };

  return (
    <CommentContext.Provider
      value={{
        commentsData: Data,
        commentsLoading: loading,
        commentsError: error,
        getcomments: useComments,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};
