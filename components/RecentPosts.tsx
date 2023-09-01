import Link from "next/link";
import { Post } from "@/.contentlayer/generated";

interface RecentPostsProps {
  posts: Post[];
}
const RecentPosts: React.FC<RecentPostsProps> = ({ posts }) => {
  return (
    <section>
      <h1>최근 게시물</h1>
      <div>
        {posts.slice(0, 5).map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post._raw.flattenedPath}`}
            passHref
          >
            <div>{post.title}</div>
            <div>{post.description}</div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
