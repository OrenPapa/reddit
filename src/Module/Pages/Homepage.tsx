import React, { useCallback, useEffect, useRef, useState } from "react";
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
  const { loadingSubbredits, subredditError, hasMore } =
    useSubreddit(pageNumber);
  const SubredditsState = useSelector(
    (state: RootState) => state.subredditsSlice.subreddits
  );

  let observer = useRef<IntersectionObserver | null>(null);

  const lastSubredditRef = useCallback(
    (node: any) => {
      if (loadingSubbredits) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loadingSubbredits, hasMore]
  );

  return (
    <>
      <Navbar pageTitle="subreddits" />
      <div className="homepage">
        <div className="homepage__subreddits">
          {SubredditsState?.map((item, i) => {
            if (SubredditsState.length === i + 1) {
              return (
                <div key={item.id} ref={lastSubredditRef}>
                  <SubredditCard
                    key={item.id}
                    onClick={() => navigate(`/posts/${item.id}`)}
                    title={item.title}
                    description={item.description}
                  />
                </div>
              );
            } else {
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
            }
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
