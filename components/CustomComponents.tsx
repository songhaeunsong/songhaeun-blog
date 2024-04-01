import CodeBlock from "@/components/CodeBlock";
import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

interface CodeProps {
  node?: unknown;
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function CustomComponents(components: MDXComponents): MDXComponents {
  return {
    img: (props) => (
      <Image
        sizes="100vw"
        className={props.className}
        width={0}
        height={0}
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
      />
    ),
    code: ({ node, inline, className, children, ...props }: CodeProps) => {
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
    ...components,
  };
}
