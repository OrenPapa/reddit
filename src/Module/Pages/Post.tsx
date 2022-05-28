import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getComments } from "../../Redux/CommentsSlice";
import { getPosts } from "../../Redux/PostsSlice";
import { AppDispatch, RootState } from "../../Redux/Store";
import "../../Styles/main.scss";
import Navbar from "../Components/Navbar";
import PostCard from "../Components/PostCard";

function Post() {
  const { subredditId, postId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(
      getPosts(
        `https://6040c786f34cf600173c8cb7.mockapi.io/subreddits/${subredditId}/posts`
      )
    );
    dispatch(
      getComments(
        `https://6040c786f34cf600173c8cb7.mockapi.io/subreddits/${subredditId}/posts/${postId}/comments`
      )
    );
  }, [dispatch, subredditId, postId]);
  const postState = useSelector((state: RootState) => state.postsSlice);
  const selectedPost = useMemo(
    () => postState.posts.find((post) => post.id === postId),
    [ postState]
  );
  const commentsState = useSelector((state: RootState) => state.commentsSlice);

  return (
    <>
      <Navbar
        pageTitle={selectedPost && selectedPost?.title}
        adminName={selectedPost && selectedPost?.user}
      />
      <div className="post-screen">
        <div className="post-screen__top-panel">
          {selectedPost ? (
            <PostCard
              id={selectedPost!.id}
              title={selectedPost?.title}
              description={selectedPost?.body}
              user={selectedPost?.user}
              voteCount={selectedPost!.upvotes - selectedPost!.downvotes}
            />
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
        <div className="post-screen__bottom-panel">
          {postState.isLoading && <h2>Loading...</h2>}
          {postState.hasError && (
            <h2>An error has occured please refresh your page.</h2>
          )}
          {commentsState.comments?.map((comment) => {
            return (
              <PostCard
                id={comment.id}
                key={comment.id}
                title={"Comment"}
                description={comment.body}
                user={comment.name}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Post;
