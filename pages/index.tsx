import Container from "../components/Container";
import styled from "styled-components";
import RecentPosts from "@/components/RecentPosts";
import { allPosts } from "@/.contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import navLinks from "@/data/navLinks";
import Link from "next/link";
import Image from "next/image";
import metaData from "@/data/metaData";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <HomeImg>
        <Image
          src={metaData.homeImg}
          width={100}
          height={100}
          layout="responsive"
          alt="homeImg"
        />
      </HomeImg>
      <HomeText>
        Welcome to <br />
        Haeun&apos;s BLOG! <br />
        <Link href={navLinks[1].link} key={navLinks[1].title}>
          <button>View Posts</button>
        </Link>
      </HomeText>
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
`;

const HomeText = styled.span`
  position: absolute;
  text-align: center;
  top: 32.5vw;
  right: 90px;
  color: white;
  font-size: 70px;
  font-family: Serif;

  button {
    padding: 13px 25px;
    font-size: 26px;
    font-family: sans-serif;
    font-weight: 100;
    border: none;
    border-radius: 3px;
    color: white;
    background-color: ${(props) => props.theme.pointColor};
    opacity: 0.9;
  }
  button:hover {
    background-color: ${(props) => props.theme.whiteFontColor};
    color: ${(props) => props.theme.pointColor};
    transition: ${(props) => props.theme.transition};
  }
  button:active {
    opacity: 0.6;
  }

  @media screen and (max-width: 1300px) {
    top: 18vw;
    right: 3vw;
    font-size: 6vw;

    button {
      font-size: 2vw;
      padding: 1vw 2vw;
    }
  }
`;

export default Home;
