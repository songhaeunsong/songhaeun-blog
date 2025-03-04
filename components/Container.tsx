import styled from "styled-components";
import Link from "next/link";
import Head from "next/head";
import metaData from "@/data/metaData";
import { useState, useEffect } from "react";

const Container = (props: any) => {
  const meta = {
    title: metaData.title,
    description: metaData.description,
    author: metaData.author,
    icon: metaData.icons.icon,
    ...props.customMeta,
  };

  // const [scrolling, setScrolling] = useState(false);

  // const handleScroll = () => {
  //   if (window.scrollY > 0) {
  //     setScrolling(true);
  //   } else {
  //     setScrolling(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:site_name" content={meta.author} />
        <link rel="shortcut icon" href={meta.icon} />
      </Head>

      <Background>
        <StyledMain>{props.children}</StyledMain>
      </Background>
    </>
  );
};

const LogoImg = styled.img`
  width: 100px;
`;

const GNB = styled.header<{ scrolling: boolean }>`
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 16px);
  height: 50px;
  background-color: ${(props) =>
    props.scrolling ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.2)"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
  transition: ${(props) => props.theme.transition};
`;

const Background = styled.div`
  overflow: hidden;
  padding: 0px;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
`;

const StyledMain = styled.main`
  width: 55vw;
  padding: 40px 30px 200px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 900px) {
    width: 95vw;
    padding: 30px 0px 50px 0px;
  }
`;

export default Container;
