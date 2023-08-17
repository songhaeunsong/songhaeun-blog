import Head from "next/head";
import Nav from "./Nav";

const Container = (props: any) => {
  return (
    <>
      <Head>
        <title>하은이의 블로그</title>
      </Head>
      <header>
        <Nav />
      </header>
      <main>{props.children}</main>
    </>
  );
};
export default Container;
