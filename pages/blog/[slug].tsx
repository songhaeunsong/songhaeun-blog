import styled from "styled-components";
import Container from "components/Container";
import { allPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { ParsedUrlQuery } from "querystring";
import CodeBlock from "@/components/CodeBlock";
import "github-markdown-css/github-markdown-light.css";

interface TProps {
  node?: unknown;
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}
const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const components = {
    code({ node, inline, className, children, ...props }: TProps) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <CodeBlock
          value={String(children).replace(/\n$/, "")}
          language={match[1]}
          {...props}
        />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };
  // 각각의 글 렌더링
  const MDXComponent = useMDXComponent(post ? post.body.code : "");

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
            <MDXComponent style={{ width: "80%" }} components={components} />
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
  margin-top: 80px;
  text-align: center;
  font-size: 30px;
`;

const PostContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.whiteFontColor};

  article {
    padding: 30px;
    width: 55vw;
    background-color: white;
    border-radius: 5px;
    overflow: auto;

    img {
      max-width: 100%;
      height: auto;
    }
    @media screen and (max-width: 900px) {
      width: 75vw;
    }
  }
`;
export default Post;
