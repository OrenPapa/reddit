import React, { useState, useMemo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ActionTypes, getPosts, updateVoteCount } from "../../Redux/PostsSlice";
import { AppDispatch, RootState } from "../../Redux/Store";
import { getSubreddits } from "../../Redux/SubredditSlice";
import "../../Styles/main.scss";
import InformationCard from "../Components/InformationCard";
import Navbar from "../Components/Navbar";
import PostCard from "../Components/PostCard";
import SortBy from "../Components/SortBy";

function Posts() {
  const dispatch = useDispatch<AppDispatch>();
  const { subredditId } = useParams();
  const [urlParam, setUrlParam] = useState("");
  const navigate = useNavigate();
  const sortByTitle = "?sortBy=title";
  useEffect(() => {
    dispatch(
      getSubreddits(`https://6040c786f34cf600173c8cb7.mockapi.io/subreddits`)
    );
    dispatch(
      getPosts(
        `https://6040c786f34cf600173c8cb7.mockapi.io/subreddits/${subredditId}/posts${urlParam}`
      )
    );
  }, [dispatch, subredditId, urlParam]);
  const subredditsState = useSelector(
    (state: RootState) => state.subredditsSlice.subreddits
  );
  const selectedSubreddit = useMemo(
    () => subredditsState!.find((subreddit) => subreddit.id === subredditId),
    [subredditsState]
  );
  const postsState = useSelector((state: RootState) => state.postsSlice);

  const onUpVote = (id: string) => {
    dispatch(
      updateVoteCount({
        id: id,
        vote: ActionTypes.UP_VOTE,
        isUpvoted: true,
        isDownvoted: false,
      })
    );
  };

  const onDownVote = (id: string) => {
    dispatch(
      updateVoteCount({
        id: id,
        vote: ActionTypes.DOWN_VOTE,
        isUpvoted: false,
        isDownvoted: true,
      })
    );
  };

  return (
    <>
      <Navbar pageTitle={selectedSubreddit && selectedSubreddit!.title} />
      <div className="posts-screen">
        <div className="posts-screen__left-panel">
          <div className="posts-screen__left-panel-content">
            <SortBy onClick={() => setUrlParam(sortByTitle)} />
            <div className="posts-screen__posts-container">
              {postsState.posts?.map((post) => {
                return (
                  <PostCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    description={post.body}
                    user={post.user}
                    voteCount={post.upvotes - post.downvotes}
                    onUpvote={() => {
                      onUpVote(post.id);
                    }}
                    onDownvote={() => {
                      onDownVote(post.id);
                    }}
                    onClick={() => {
                      navigate(`/posts/${subredditId}/post/${post.id}`);
                    }}
                  />
                );
              })}
              {postsState.isLoading && <h2>Loading...</h2>}
              {postsState.hasError && (
                <h2>An error has occured please refresh your page.</h2>
              )}
            </div>
          </div>
        </div>
        <div className="posts-screen__right-panel">
          <div className="posts-screen__right-panel-content">
            <InformationCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Posts;
