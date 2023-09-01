import Link from "next/link";
import * as Local from "contentlayer/source-files";

export interface BlogPostProps {
  date: string;
  title: string;
  des: string;
  slug: Local.RawDocumentData;
}

const BlogPosts: React.FC<BlogPostProps> = ({ date, title, des, slug }) => {
  return (
    <Link href={`/blog/${slug.flattenedPath}`} passHref>
      <div>날짜: {date}</div>
      <div>게시글 제목: {title}</div>
      <div>게시글 내용: {des}</div>
    </Link>
  );
};

export default BlogPosts;
