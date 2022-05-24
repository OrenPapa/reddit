import axios from "axios";
import { createContext, useCallback, useEffect, useState } from "react";
import { getUniqueObjects } from "../Helpers/Helpers";
import { ChildrenType } from "../Types/ProviderChildrenType";
import { Subreddit, SubredditsResponse } from "../Types/Subreddits";

type InitialState = {
  subredditsData?: Subreddit[];
  subredditsLoading?: boolean;
  subredditsError?: boolean;
  subredditsHasMore?: boolean;
  getSubreddits?: (arg0: string) => void;
};

export const SubredditContext = createContext<InitialState>({});

export const SubredditContextProvider = ({ children }: ChildrenType) => {
  const [data, setData] = useState<Subreddit[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const UseSubreddits = (url: string) => {
    const apiCall = useCallback(() => {
      setLoading(true);
      axios
        .get(url)
        .then((response: SubredditsResponse) => {
          setData(getUniqueObjects([...data, ...response.data]));
          setHasMore(response.data.length > 0);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
        });
    }, [url]);
    useEffect(() => apiCall(), [apiCall]);
  };

  return (
    <SubredditContext.Provider
      value={{
        subredditsData: data,
        subredditsLoading: loading,
        subredditsError: error,
        subredditsHasMore: hasMore,
        getSubreddits: UseSubreddits,
      }}
    >
      {children}
    </SubredditContext.Provider>
  );
};
