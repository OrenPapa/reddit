import axios from "axios";
import { createContext, useCallback, useEffect, useState } from "react";
import { Post } from "../Types/Posts";
import { ChildrenType } from "../Types/ProviderChildrenType";

export enum ActionTypes {
  UP_VOTE = "UP_VOTE",
  DOWN_VOTE = "DOWN_VOTE",
}

type InitialState = {
  postData?: Post[];
  postLoading?: boolean;
  postError?: boolean;
  getPost?: (arg0: string) => void;
  voteHandler?: (
    arg0: string,
    arg1: string,
    arg2: boolean,
    arg3: boolean
  ) => void;
};

export const PostContext = createContext<InitialState>({});

export const PostContextProvider = ({ children }: ChildrenType) => {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const UsePosts = (url: string) => {
    const apiCall = useCallback(() => {
      setLoading(true);
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
        });
    }, [url]);
    useEffect(() => {
      apiCall();
    }, [apiCall]);
  };

  return (
    <PostContext.Provider
      value={{
        postData: data,
        postLoading: loading,
        postError: error,
        getPost: UsePosts,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
