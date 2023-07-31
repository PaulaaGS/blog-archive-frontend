import { styled } from "styled-components";

type PostListItemProps = {
  title: string;
  body: string;
};

const Container = styled.div`
  padding: 20px;
  text-align: left;
  width: 300px;
  border: 1px solid rgba(66, 68, 90, 0.5);
  border-radius: 20px;
  box-shadow: 8px 8px 16px -12px rgba(66, 68, 90, 1);
  background-color: rgba(194, 195, 208, 0.5);
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Body = styled.div`
  font-size: 15px;
`;

export const PostListItem = (props: PostListItemProps) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Body>{props.body}</Body>
    </Container>
  );
};
