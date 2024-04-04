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
        <p>웹 프론트엔드 공부하는 송하은입니다.</p>
      </HomeText>
      <div>{posts && <RecentPosts posts={posts} />}</div>
      <ButtonLink href={navLinks[1].link} key={navLinks[1].title}>
        <button>전체 게시글 보기</button>
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
  text-align: center;
  color: ${(props) => props.theme.pointColor};
  font-size: min(50px, 6vw);
  font-family: Serif;
  p {
    font-size: min(20px, 4vw);
    font-family: "Arial Narrow";
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
      font-size: 6vw;
      padding: 2vw 4vw;
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
