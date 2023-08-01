import { CircularProgress } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Post } from "../types/post";
import { PostListItem } from "./PostListItem";
import { SearchInput } from "./SearchInput";

const Container = styled.div`
  margin: 20px auto;
  width: 80%;
`;

const List = styled.div`
  margin: 40px auto;
  display: flex;
  gap: 30px;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
`;

export const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>();

  const loadPostList = async (search?: string) => {
    try {
      setLoading(true);

      const { data } = await axios.get('http://localhost:3001/posts', {
        params: { search },
      });

      setPosts(data);
    } catch {
      console.log("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPostList(searchTerm);
  }, [searchTerm]);

  return (
    <Container>
      <SearchInput onSearchClick={setSearchTerm} initialValue={searchTerm} />
      {loading ? (
        <CircularProgress />
      ) : (
        <List>
          {posts.map((post) => (
            <PostListItem key={post.id} title={post.title} body={post.body} />
          ))}
        </List>
      )}
    </Container>
  );
};
