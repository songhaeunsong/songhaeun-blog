import Container from "../components/Container";
import styled from "styled-components";
import RecentPosts from "@/components/RecentPosts";
import { allPosts } from "@/.contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { useEffect, useState } from "react";
import Pagination from "@/components/Pagination";
import { useRouter } from "next/router";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { query, push } = router;

  const initialPage = query.page ? Number(query.page) : 1;
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [startPost, setStartPost] = useState((initialPage - 1) * 7);

  useEffect(() => {
    setStartPost((currentPage - 1) * 7);
  }, [currentPage]);

  const handlePagination = (page: number) => {
    setCurrentPage(page);
    push(`/?page=${page}`, undefined, { scroll: false });
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <HomeText>
        <span>웹 개발 공부하는 송하은입니다🍀</span>
      </HomeText>
      <div>{posts && <RecentPosts posts={posts} startPost={startPost} />}</div>
      <Pagination
        currentPage={currentPage}
        count={posts.length}
        handlePagination={handlePagination}
      />
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
  background-color: #ffffff;
  text-align: center;
  color: ${(props) => props.theme.pointColor};
  font-size: min(50px, 6vw);
  position: relative;

  span {
    font-size: min(20px, 4vw);
    color: ${(props) => props.theme.pointColor};
    position: relative;
  }

  span:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #ffffff;
    border-left: 2px solid black;
    animation: animate 3s steps(14) infinite;
  }

  @keyframes animate {
    40%,
    60% {
      transform: translateX(100%);
    }

    100% {
      transform: translateX(0);
    }
  }
`;

export default Home;
