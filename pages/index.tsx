import Container from "../components/Container";
import styled from "styled-components";
import RecentPosts from "@/components/RecentPosts";
import { allPosts } from "@/.contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import metaData from "@/data/metaData";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <HomeImg>
        <img src={metaData.homeImg} alt="homeImg" />
      </HomeImg>
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

const HomeImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    width: 100%;
  }
`;

export default Home;
