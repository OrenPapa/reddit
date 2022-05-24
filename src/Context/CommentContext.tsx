import axios from "axios";
import { url } from "inspector";
import React, { createContext, useCallback, useEffect, useState } from "react";
import { Comment } from "../Types/Comments";
import { ChildrenType } from "../Types/ProviderChildrenType";

type InitialState = {
  commentsData?: Comment[];
  commentsLoading?: boolean;
  commentsError?: boolean;
  getComments?: (arg0: string) => void;
};

export const CommentContext = createContext<InitialState>({});

export const CommetnContextProvider = ({ children }: ChildrenType) => {
  const [data, setData] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const useComments = (url: string) => {
    const apiCall = useCallback(() => {
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
    useEffect(() => {
      apiCall();
    }, [apiCall]);
  };

  return (
    <CommentContext.Provider
      value={{
        commentsData: data,
        commentsLoading: loading,
        commentsError: error,
        getComments: useComments,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};
