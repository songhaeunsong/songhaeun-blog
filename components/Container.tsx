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
      <Header>
        <Link href="/">
          <LogoImg src={metaData.logoUrl} alt="logo" />
        </Link>
        <Nav />
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:site_name" content={meta.author} />
      </Header>
      <main>{props.children}</main>
    </>
  );
};

const LogoImg = styled.img`
  width: 100px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
`;
export default Container;
