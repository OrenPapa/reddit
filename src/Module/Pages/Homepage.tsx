import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import "../../Styles/main.scss";
import SubredditCard from "../Components/SubredditCard";
import useSubreddit from "../../Hooks/useSubreddit";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";

function Homepage() {
  const navigate = useNavigate();
  const [pageNumber, setPageNumber] = useState(1);
  const { loadingSubbredits, subredditError, hasMore } = useSubreddit(
    `https://6040c786f34cf600173c8cb7.mockapi.io/subreddits?page=${pageNumber}&limit=16`
  );
  const subredditsState = useSelector(
    (state: RootState) => state.subredditsSlice.subreddits
  );

  window.addEventListener("scroll", () => {
    if (
      window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight &&
      hasMore
    ) {
      setPageNumber(pageNumber + 1);
    }
  });

  return (
    <>
      <Navbar pageTitle="subreddits" />
      <div className="homepage">
        <div className="homepage__subreddits">
          {subredditsState?.map((item) => {
            return (
              <div key={item.id}>
                <SubredditCard
                  key={item.id}
                  onClick={() => navigate(`/posts/${item.id}`)}
                  title={item.title}
                  description={item.description}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="homepage__text">
        {loadingSubbredits && <h2>Loading...</h2>}
        {subredditError && (
          <h2>An error has occured please refresh your page.</h2>
        )}
      </div>
    </>
  );
}

export default Homepage;
