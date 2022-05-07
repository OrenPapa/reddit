import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../Module/Pages/Homepage";
import Post from "../Module/Pages/Post";
import Posts from "../Module/Pages/Posts";

const Routing = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/posts/:subredditId" element={<Posts />} />
          <Route path="/posts/:subredditId/post/:postId" element={<Post />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routing;
