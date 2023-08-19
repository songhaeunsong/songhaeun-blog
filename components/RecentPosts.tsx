import Link from "next/link";

const RecentPosts = () => {
  return (
    <section>
      <h1>최근 게시물</h1>
      <div>
        <Link href="/" passHref>
          <div>게시물 제목이 나타납니다.</div>
          <div>게시물 설명이 나타납니다.</div>
        </Link>
        <Link href="/" passHref>
          <div>Hello!</div>
          <div>안녕하세요.</div>
        </Link>
      </div>
    </section>
  );
};

export default RecentPosts;
