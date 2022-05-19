import React from "react";
import { SubredditContextProvider } from "../Context/SubredditContext";
import Routing from "./Routing";

function App() {
  return (
    <SubredditContextProvider>
      <Routing />;
    </SubredditContextProvider>
  );
}
export default App;
