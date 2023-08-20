import Container from "../components/Container";
import BlogPosts from "@/components/BlogPosts";
import { allPosts } from "@/.contentlayer/generated";
import { InferGetStaticPropsType } from "next";

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      {posts.map((post) => (
        <BlogPosts
          date={post.date}
          title={post.title}
          des={post.description}
          slug={post._raw}
          key={post._id}
        />
      ))}
      <div>Blog</div>
    </Container>
  );
};

export const getStaticProps = async () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      posts,
    },
  };
};
export default Blog;
