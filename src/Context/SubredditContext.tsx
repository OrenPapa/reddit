import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { getUniqueObjects } from "../Helpers/Helpers";
import { Subreddit, SubredditsResponse } from "../Types/Subreddits";

type InitialState = {
  subredditsData?: Subreddit[];
  subredditsLoading?: boolean;
  subredditsError?: boolean;
  subredditsHasMore?: boolean;
  changePageNumber?: () => void;
};

export const SubredditContext = createContext<InitialState>({});

export const SubredditContextProvider = ({ children }: any) => {
  const [Data, setData] = useState<Subreddit[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  const changePageNumber = () => {
    if (hasMore) {
      setPageNumber(pageNumber + 1);
    }
  };

  let url = `https://6040c786f34cf600173c8cb7.mockapi.io/subreddits?page=${pageNumber}&limit=16`;

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

  return (
    <SubredditContext.Provider
      value={{
        subredditsData: Data,
        subredditsLoading: loading,
        subredditsError: error,
        subredditsHasMore: hasMore,
        changePageNumber: changePageNumber,
      }}
    >
      {children}
    </SubredditContext.Provider>
  );
};
