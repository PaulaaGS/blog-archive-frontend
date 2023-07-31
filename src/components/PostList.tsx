import { Post } from "../types/post";
import { PostListItem } from "./PostListItem";
import { useEffect, useState } from "react";
import { SearchInput } from "./SearchInput";
import { styled } from "styled-components";

const Container = styled.div`
  margin: 20px auto;
  width: 60%;
`;


export const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const loadPostList = async () => {
    try {
      setLoading(true);

      const res = await fetch(`http://localhost:3001/posts`);
      const data = await res.json();

      setPosts(data);
    } catch {
      console.log("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPostList();
  }, []);

  return (
    <Container>
        <SearchInput/>
      {posts.map((post) => (
        <PostListItem key={post.id} title={post.title} body={post.body}/>
      ))}
    </Container>
  );
};
