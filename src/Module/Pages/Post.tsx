import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useComment from "../../Hooks/useComment";
import usePost from "../../Hooks/usePost";
import { RootState } from "../../Redux/Store";
import "../../Styles/main.scss";
import Navbar from "../Components/Navbar";
import PostCard from "../Components/PostCard";

function Post() {
  const { subredditId, postId } = useParams();
  const { CommentsData, loadingComments, CommentsError } = useComment(
    `https://6040c786f34cf600173c8cb7.mockapi.io/subreddits/${subredditId}/posts/${postId}/comments`
  );
  const postState = useSelector((state: RootState) => state.postsSlice.posts);
  const SelectedPost = postState.find((post) => post.id === postId);

  return (
    <>
      <Navbar />
      <div className="post-screen">
        <div className="post-screen__top-panel">
          <PostCard
            title={SelectedPost?.title}
            description={SelectedPost?.body}
            user={SelectedPost?.user}
            voteCount={SelectedPost?.upvotes! - SelectedPost?.downvotes!}
          />
        </div>
        <div className="post-screen__bottom-panel">
        {loadingComments && <h2>Loading...</h2>}
        {CommentsError && (
          <h2>An error has occured please refresh your page.</h2>
        )}
          {CommentsData?.map((comment) => {
            console.log(comment)
            return (
              <PostCard
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
