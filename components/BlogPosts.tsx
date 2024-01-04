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
  color: ${(props) => props.theme.fontColor};
  text-decoration-line: none;
  hr {
    border: 0.6px solid #c7cfc9;
  }
  span {
    font-size: 15px;
    font-weight: 200;
    color: gray;
  }
  article {
    margin-top: 4px;
    font-weight: 500;
    font-size: 20px;
  }
  article:hover {
    color: ${(props) => props.theme.pointColor};
  }
  p {
    font-weight: 400;
    font-size: 15px;
    margin: 7px 0;
  }
`;
export default BlogPosts;
