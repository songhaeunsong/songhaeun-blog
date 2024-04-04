import Container from "../components/Container";
import BlogPosts from "@/components/BlogPosts";
import { allPosts } from "@/.contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { styled } from "styled-components";

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <StyledContentsContainer>
        <Title>전체 게시글</Title>
        {posts &&
          posts.map((post) => (
            <BlogPosts
              date={post.date}
              title={post.title}
              des={post.description}
              img={post.img}
              slug={post._raw}
              key={post._id}
            />
          ))}
      </StyledContentsContainer>
    </Container>
  );
};

export const getStaticProps = async () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      posts,
    },
  };
};

const StyledContentsContainer = styled.div``;
const Title = styled.h2`
  color: ${(prop) => prop.theme.pointColor};
  text-align: center;
  font-weight: 300;
  font-size: min(30px, 7vw);
  margin-top: 0;
`;
export default Blog;
