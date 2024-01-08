import styled from "styled-components";
import Container from "components/Container";
import { allPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { ParsedUrlQuery } from "querystring";

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // 각각의 글 렌더링
  const MDXComponent = useMDXComponent(post ? post.body.code : "");

  // useMDXComponent 훅을 사용해 마크다운 코드를 리액트 컴포넌트로 변환
  const customMeta = post && {
    title: post.title,
    description: post.description,
    date: new Date(post.date).toISOString(),
  }; // 메타데이터를 설정하고 컨테이너로 전달해 메타데이터를 커스터마이징
  return (
    <Container customMeta={customMeta}>
      {post && (
        <div className="mt-10 prose">
          <PostTitle className="text-sky-700">{post.title}</PostTitle>
          <div style={{ padding: "0 30px" }}>
            <MDXComponent />
          </div>
        </div>
      )}
    </Container>
  );
};

export const getStaticPaths = async () => {
  // 어떤 경로들을 pre-rendering 할지 결정
  return {
    paths: allPosts.map((p) => ({ params: { slug: p._raw.flattenedPath } })), // 동적경로 생성
    fallback: false, // 없는 페이지는 404 에러
  };
};

export const getStaticProps = async ({
  // 동적으로 생성된 페이지에 필요한 데이터 제공
  params,
}: {
  params: ParsedUrlQuery;
}) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug); // 해당 글의 데이터를 찾아와 props로 반환
  return {
    props: {
      post,
    },
  };
};

const PostTitle = styled.h2`
  margin-top: 80px;
  text-align: center;
  font-size: 30px;
`;
export default Post;
