import React from "react";
import Navbar from "../Components/Navbar";
import "../../Styles/main.scss";
import SubredditCard from "../Components/SubredditCard";
import useSubreddit from "../../Hooks/useSubreddit";

function Homepage() {
  const { data, loading, error } = useSubreddit(
    "https://6040c786f34cf600173c8cb7.mockapi.io/subreddits"
  );

  return (
    <>
      <Navbar />
      <div className="homepage">
        {loading && <h2>Loading...</h2>}
        {error && <h2>An error has occured please refresh your page.</h2>}
        {!loading &&
          !error &&
          data.map((item: any) => {
            return (
              <SubredditCard
                key={item.id}
                title={item.title}
                description={item.description}
              />
            );
          })}
      </div>
    </>
  );
}

export default Homepage;
