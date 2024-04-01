import Container from "../components/Container";
import styled from "styled-components";
import RecentPosts from "@/components/RecentPosts";
import { allPosts } from "@/.contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import navLinks from "@/data/navLinks";
import Link from "next/link";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <HomeText>
        Welcome to Haeun&apos;s BLOG! <br />
      </HomeText>
      <div>{posts && <RecentPosts posts={posts} />}</div>
      <ButtonLink href={navLinks[1].link} key={navLinks[1].title}>
        <button>View More Posts</button>
      </ButtonLink>
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

const HomeText = styled.span`
  margin-top: 80px;
  text-align: center;
  color: ${(props) => props.theme.pointColor};
  font-size: 50px;
  font-family: Serif;

  @media screen and (max-width: 1300px) {
    font-size: 6vw;
  }
`;

const ButtonLink = styled(Link)`
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
    margin-top: 30px;

    @media screen and (max-width: 1300px) {
      font-size: 2vw;
      padding: 1vw 2vw;
    }
  }
  button:hover {
    opacity: 0.6;
  }

  button:active {
    background-color: ${(props) => props.theme.whiteFontColor};
    color: ${(props) => props.theme.pointColor};
    transition: ${(props) => props.theme.transition};
  }
`;
export default Home;
