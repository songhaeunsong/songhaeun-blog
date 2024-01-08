import styled from "styled-components";
import Link from "next/link";
import Head from "next/head";
import Nav from "./Nav";
import metaData from "@/data/metaData";
import { useState, useEffect } from "react";

const Container = (props: any) => {
  const meta = {
    title: metaData.title,
    description: metaData.description,
    author: metaData.author,
    ...props.customMeta,
  };

  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:site_name" content={meta.author} />
      </Head>
      <GNB scrolling={scrolling}>
        <Link href="/">
          <LogoImg src={metaData.logoUrl} alt="logo" />
        </Link>
        <Nav scrolling={scrolling} />
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:site_name" content={meta.author} />
      </GNB>
      <StyledMain>{props.children}</StyledMain>
    </>
  );
};

const LogoImg = styled.img`
  width: 100px;
`;

const GNB = styled.header<{ scrolling: boolean }>`
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

const StyledMain = styled.main`
  padding: 0px;
  margin: 0;
`;

export default Container;
