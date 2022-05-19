import React from "react";
import { PostContextProvider } from "../Context/PostContext";
import { SubredditContextProvider } from "../Context/SubredditContext";
import Routing from "./Routing";

function App() {
  return (
    <SubredditContextProvider>
      <PostContextProvider>
        <Routing />;
      </PostContextProvider>
    </SubredditContextProvider>
  );
}
export default App;
