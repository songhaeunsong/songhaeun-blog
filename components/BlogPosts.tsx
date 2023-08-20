import Link from "next/link";

const BlogPosts = ({ date, title, des, slug }) => {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <div>날짜{date}</div>
      <div>게시글 제목{title}</div>
      <div>게시글 내용{des}</div>
    </Link>
  );
};
export default BlogPosts;
