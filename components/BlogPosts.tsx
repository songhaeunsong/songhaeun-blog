import Link from "next/link";
import * as Local from "contentlayer/source-files";
import { styled } from "styled-components";

export interface BlogPostProps {
  date: string;
  title: string;
  des: string;
  slug: Local.RawDocumentData;
}

const BlogPosts: React.FC<BlogPostProps> = ({ date, title, des, slug }) => {
  return (
    <StyledLink href={`/blog/${slug.flattenedPath}`} passHref>
      <span>{date}</span>
      <article>게시글 제목: {title}</article>
      <p>게시글 내용: {des}</p>
      <hr />
    </StyledLink>
  );
};
const StyledLink = styled(Link)`
  color: #474e49;
  text-decoration-line: none;
  hr {
    border: 1px solid #c7cfc9;
  }
  span {
    font-size: 15px;
    color: gray;
  }
  article {
    font-weight: 500;
    font-size: 20px;
  }
  p {
    font-weight: 400;
    font-size: 15px;
    margin: 5px 0;
  }
`;
export default BlogPosts;
