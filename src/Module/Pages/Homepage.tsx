import React from "react";
import Navbar from "../Components/Navbar";
import "../../Styles/main.scss";
import SubredditCard from "../Components/SubredditCard";
import useSubreddit from "../../Hooks/useSubreddit";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../Redux";
import { useSelector } from "react-redux";
import { State } from "../../Redux/Reducers/CombineReducers";

function Homepage() {
  const { data, loading, error } = useSubreddit(
    "https://6040c786f34cf600173c8cb7.mockapi.io/subreddits"
  );

  const dispatch = useDispatch();
  const subredditState = useSelector((state: State) => state.subreddit);
  const { getSubredditId } = bindActionCreators(ActionCreators, dispatch);

  return (
    <>
      <Navbar />
      <div className="homepage">
        {loading && <h2>Loading...</h2>}
        {error && <h2>An error has occured please refresh your page.</h2>}
        {!loading &&
          !error &&
          data.map((item) => {
            return (
              <div key={item.id}>
                <SubredditCard
                onClick={() => getSubredditId(item.id)}
                  title={item.title}
                  description={item.description}
                />
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Homepage;
