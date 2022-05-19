import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { getUniqueObjects } from "../Helpers/Helpers";
import { Subreddit, SubredditsResponse } from "../Types/Subreddits";

type InitialState = {
  subredditsData?: Subreddit[];
  subredditsLoading?: boolean;
  subredditsError?: boolean;
  subredditsHasMore?: boolean;
  getSubreddits?: (arg0: string) => void;
};

export const SubredditContext = createContext<InitialState>({});

export const SubredditContextProvider = ({ children }: any) => {
  const [Data, setData] = useState<Subreddit[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const UseSubreddits = (url: string) => {
    useEffect(() => {
      setLoading(true);
      axios
        .get(url)
        .then((response: SubredditsResponse) => {
          setData(getUniqueObjects([...Data, ...response.data]));
          setHasMore(response.data.length > 0);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
        });
    }, [url]);
  };

  return (
    <SubredditContext.Provider
      value={{
        subredditsData: Data,
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
