import Container from "../components/Container";
import styled from "styled-components";
import RecentPosts from "@/components/RecentPosts";
import { allPosts } from "@/.contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import metaData from "@/data/metaData";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <HomeImg src={metaData.homeImg} alt="homeImg" />
      <div>{posts && <RecentPosts posts={posts} />}</div>
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

const HomeImg = styled.img`
  width: 700px;
`;

export default Home;
