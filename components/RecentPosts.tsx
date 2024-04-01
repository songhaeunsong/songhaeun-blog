import Link from "next/link";
import { Post } from "@/.contentlayer/generated";
import { styled } from "styled-components";
import PostItem from "./PostItem";

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
            <PostItem
              date={post.date}
              title={post.title}
              description={post.description}
              img={post.img}
            />
          </StyledLink>
        ))}
      </section>
    </StyledContentsContainer>
  );
};

const StyledContentsContainer = styled.div`
  h1 {
    margin: 120px 0 50px 0;
    font-weight: 300;
    font-size: 30px;
  }
`;

const StyledLink = styled(Link)`
  color: #474e49;
  text-decoration-line: none;
`;
export default RecentPosts;
