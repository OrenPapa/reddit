import React from "react";
import Navbar from "../Components/Navbar";
import "../../Styles/main.scss";
import SubredditCard from "../Components/SubredditCard";

function Homepage() {
  return (
    <>
      <Navbar />
      <div className="homepage">
        <SubredditCard title="Reddit" description="this is a short subreddit description" />
      </div>
    </>
  );
}

export default Homepage;
