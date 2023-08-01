import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import styled from "styled-components";
import "./App.css";
import { PostList } from "./components/PostList";

const BlogTitle = styled.h1`
  font-size: 36px;
  font-family: "roboto";
`;

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <BlogTitle>The Blog</BlogTitle>
        <PostList />
      </div>
    </ThemeProvider>
  );
}

export default App;
