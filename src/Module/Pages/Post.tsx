import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getComments } from "../../Redux/CommentsSlice";
import { AppDispatch, RootState } from "../../Redux/Store";
import "../../Styles/main.scss";
import Navbar from "../Components/Navbar";
import PostCard from "../Components/PostCard";

function Post() {
  const { subredditId, postId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getComments({subredditId, postId}));
  }, [dispatch, subredditId, postId]);
  const postState = useSelector((state: RootState) => state.postsSlice);
  const selectedPost = postState.posts.find((post) => post.id === postId);
  const commentsState = useSelector((state: RootState) => state.commentsSlice);

  return (
    <>
      <Navbar pageTitle={selectedPost?.title} adminName={selectedPost?.user} />
      <div className="post-screen">
        <div className="post-screen__top-panel">
          <PostCard
            id={selectedPost!.id}
            title={selectedPost?.title}
            description={selectedPost?.body}
            user={selectedPost?.user}
            voteCount={selectedPost!.upvotes - selectedPost!.downvotes}
          />
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
