import Link from "next/link";
import { Post } from "@/.contentlayer/generated";
import { styled } from "styled-components";
import PostItem from "./PostItem";

interface RecentPostsProps {
  posts: Post[];
  postCount: number;
}
const RecentPosts: React.FC<RecentPostsProps> = ({ posts, postCount }) => {
  return (
    <StyledContentsContainer>
      <h1>{posts.length}개의 게시물</h1>
      <section>
        {posts.slice(0, postCount).map((post) => (
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
    color: ${(prop) => prop.theme.pointColor};
    margin: 5vw 0 3vw 5px;
    font-weight: 300;
    font-size: min(4vw, 25px);
  }
`;

const StyledLink = styled(Link)`
  color: #474e49;
  text-decoration-line: none;
`;
export default RecentPosts;
