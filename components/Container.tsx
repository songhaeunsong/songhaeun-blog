import styled from "styled-components";
import Link from "next/link";
import Head from "next/head";
import Nav from "./Nav";
import metaData from "@/data/metaData";

const Container = (props: any) => {
  const meta = {
    title: metaData.title,
    description: metaData.description,
    author: metaData.author,
    ...props.customMeta,
  };
  return (
    <>
      <Head>
        <title>하은이의 블로그</title>
      </Head>
      <GNB>
        <Link href="/">
          <LogoImg src={metaData.logoUrl} alt="logo" />
        </Link>
        <Nav />
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

const GNB = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 16px);
  height: 50px;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
`;

const StyledMain = styled.main`
  padding: 30px;
`;

export default Container;
