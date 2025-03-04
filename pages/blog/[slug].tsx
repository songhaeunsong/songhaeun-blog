import styled from "styled-components";
import Container from "components/Container";
import { allPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { ParsedUrlQuery } from "querystring";
import "github-markdown-css/github-markdown-light.css";
import { CustomComponents } from "@/components/CustomComponents";

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXComponent = useMDXComponent(post ? post.body.code : "");
  const customComponents = CustomComponents({});

  const customMeta = post && {
    title: post.title,
    description: post.description,
    date: new Date(post.date).toISOString(),
  }; // 메타데이터를 설정하고 컨테이너로 전달해 메타데이터를 커스터마이징

  return (
    <Container customMeta={customMeta}>
      {post && (
        <PostContent>
          <PostTitle>{post.title}</PostTitle>
          <article className="markdown-body">
            <MDXComponent components={customComponents} />
          </article>
        </PostContent>
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
  text-align: center;
  font-size: min(30px, 5vw);
  margin-top: 0;
  color: ${(props) => props.theme.deepPointColor};
  margin-bottom: 90px;
`;

const PostContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  article {
    width: 100%;
    padding: 30px;
    background-color: white;
    border-radius: 5px;
    overflow: auto;

    img {
      max-width: 100%;
      height: auto;
    }
    @media screen and (max-width: 900px) {
      width: 90vw;
      padding: 10px;
    }
  }
`;
export default Post;
