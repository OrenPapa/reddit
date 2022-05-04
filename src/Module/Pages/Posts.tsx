import React from "react";
import "../../Styles/main.scss";
import InformationCard from "../Components/InformationCard";
import Navbar from "../Components/Navbar";
import PostCard from "../Components/PostCard";
import SortBy from "../Components/SortBy";

function Posts() {
  return (
    <>
      <Navbar />
      <div className="posts-screen">
        <div className="posts-screen__left-panel">
          <div className="posts-screen__left-panel-content">
            <SortBy />
            <PostCard />
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
