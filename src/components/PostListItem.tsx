import { styled } from "styled-components";

type PostListItemProps = {
  title: string;
  body: string;
};

const Container = styled.div`
  margin: 20px auto;
  text-align: left;
`;

const Title = styled.div`
font-size: 20px;
font-weight: bold;
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
