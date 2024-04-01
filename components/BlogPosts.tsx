import Link from "next/link";
import * as Local from "contentlayer/source-files";
import { styled } from "styled-components";
import PostItem from "./PostItem";

export interface BlogPostProps {
  date: string;
  title: string;
  des: string;
  img: string;
  slug: Local.RawDocumentData;
}

const BlogPosts: React.FC<BlogPostProps> = ({
  date,
  title,
  des,
  img,
  slug,
}) => {
  return (
    <StyledLink href={`/blog/${slug.flattenedPath}`} passHref>
      <PostItem date={date} title={title} description={des} img={img} />
    </StyledLink>
  );
};
const StyledLink = styled(Link)`
  color: ${(props) => props.theme.fontColor};
  text-decoration-line: none;
`;
export default BlogPosts;
