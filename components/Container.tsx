import styled from "styled-components";
import Head from "next/head";
import Nav from "./Nav";
import metaData from "@/data/metaData";

const Container = (props: any) => {
  return (
    <>
      <Head>
        <title>하은이의 블로그</title>
      </Head>
      <Header>
        <LogoImg src={metaData.logoUrl} alt="logo" />
        <Nav />
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
