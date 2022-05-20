import React from "react";
import { CommetnContextProvider } from "../Context/CommentContext";
import { PostContextProvider } from "../Context/PostContext";
import { SubredditContextProvider } from "../Context/SubredditContext";
import Routing from "./Routing";

function App() {
  return (
    <SubredditContextProvider>
      <PostContextProvider>
        <CommetnContextProvider>
          <Routing />;
        </CommetnContextProvider>
      </PostContextProvider>
    </SubredditContextProvider>
  );
}
export default App;
