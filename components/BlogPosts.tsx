import Link from "next/link";

const BlogPosts = () => {
  return (
    <Link href="/blog" passHref>
      <div>날짜</div>
      <div>게시글 제목</div>
      <div>게시글 내용 </div>
    </Link>
  );
};
export default BlogPosts;
