import Link from "next/link";
import { Post } from "@/.contentlayer/generated";
import { styled } from "styled-components";

interface RecentPostsProps {
  posts: Post[];
}
const RecentPosts: React.FC<RecentPostsProps> = ({ posts }) => {
  return (
    <StyledContentsContainer>
      <h1>최근 게시물</h1>
      <section>
        {posts.slice(0, 5).map((post) => (
          <StyledLink
            key={post._id}
            href={`/blog/${post._raw.flattenedPath}`}
            passHref
          >
            <article>{post.title}</article>
            <p>{post.description}</p>
            <hr />
          </StyledLink>
        ))}
      </section>
    </StyledContentsContainer>
  );
};

const StyledContentsContainer = styled.div`
  padding: 0 30px;

  h1 {
    margin-top: 120px;
    font-weight: 300;
    font-size: 30px;
  }
`;

const StyledLink = styled(Link)`
  color: #474e49;
  text-decoration-line: none;
  hr {
    border: 0.5px solid #c7cfc9;
  }

  article {
    font-weight: 500;
    font-size: 20px;
  }
  article:hover {
    color: ${(props) => props.theme.pointColor};
  }
  p {
    font-weight: 400;
    font-size: 15px;
    margin: 5px 0;
  }
  padding: 0 50px;
`;
export default RecentPosts;
