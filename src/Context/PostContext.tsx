import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Post } from "../Types/Posts";

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

export const PostContextProvider = ({ children }: any) => {
  const [Data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const UsePosts = (url: string) => {
    useEffect(() => {
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
  };

  const voteHandler = (
    id: string,
    vote: string,
    isUpvoted?: boolean,
    isDownvoted?: boolean
  ) => {
    let post = Data.find((post) => post.id === id);
    if (!post) return;
    // if (vote === ActionTypes.UP_VOTE && !post.isUpvoted && !post.isDownvoted) {
    //   post.upvotes += 1;
    //   post.isUpvoted = isUpvoted!;
    //   post.isDownvoted = isDownvoted!;
    // }
    // if (vote === ActionTypes.UP_VOTE && !post.isUpvoted && post.isDownvoted) {
    //   post.upvotes += 2;
    //   post.isUpvoted = isUpvoted!;
    //   post.isDownvoted = isDownvoted!;
    // }
    // if (
    //   vote === ActionTypes.DOWN_VOTE &&
    //   !post.isUpvoted &&
    //   !post.isDownvoted
    // ) {
    //   post.downvotes += 1;
    //   post.isDownvoted = isDownvoted!;
    //   post.isUpvoted = isUpvoted!;
    // }
    // if (vote === ActionTypes.DOWN_VOTE && post.isUpvoted && !post.isDownvoted) {
    //   post.downvotes += 2;
    //   post.isDownvoted = isDownvoted!;
    //   post.isUpvoted = isUpvoted!;
    // }
  };

  return (
    <PostContext.Provider
      value={{
        postData: Data,
        postLoading: loading,
        postError: error,
        getPost: UsePosts,
        voteHandler: voteHandler,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
