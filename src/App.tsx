import React from "react";
import "./App.css";
import { PostList } from "./components/PostList";
import styled from "styled-components";

const BlogTitle = styled.h1`
  font-size: 36px;
  font-family: "roboto";
`;

function App() {
  return (
    <div className="App">
      <BlogTitle>The Blog</BlogTitle>
      <PostList />
    </div>
  );
}

export default App;
