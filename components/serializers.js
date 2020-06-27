import NextLink from "next/link";
import BasePortableText from "@sanity/block-content-to-react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";

const Link = (props) => {
  const isExternal = props.mark.href.includes("http");
  const className = "text-blue-500";
  return isExternal ? (
    <a
      className={className}
      href={props.mark.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  ) : (
    <NextLink href={props.mark.href}>
      <a className={className}>{props.children}</a>
    </NextLink>
  );
};

const AuthorReference = ({ node }) => {
  if (node && node.author && node.author.name) {
    return <span>{node.author.name}</span>;
  }
  return <></>;
};

const InlineCode = (props) => {
  return <code className="p-1 text-gray-500">{props.children}</code>;
};

const CodeBlock = (props) => {
  const { code, language } = props.node;
  return (
    <Highlight {...defaultProps} theme={theme} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`text-xs overflow-x-scroll p-8 rounded my-12 ${className}`}
          style={style}
        >
          {tokens.map((line, i) => (
            <div
              className="table-row"
              key={i}
              {...getLineProps({ line, key: i })}
            >
              <span className="hidden pr-4 text-right opacity-50 md:table-cell">
                {i + 1}
              </span>
              <span className="md:table-cell">
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

const Heading = ({ children, level, className = "" }) => {
  const H = `h${level}`;

  function getHeadingClass() {
    switch (level) {
      case 1:
        return "text-4xl mt-16";
      case 2:
        return "text-3xl mt-16";
      case 3:
        return "text-2xl mt-14";
      case 4:
        return "text-xl mt-12";
      default:
        return "text-base mt-10";
    }
  }

  return (
    <H className={`font-bold ${getHeadingClass()} ${className}`}>{children}</H>
  );
};

const List = ({ children, type }) => {
  return type !== "number" ? (
    <ul className="pl-4 mt-8 space-y-2 text-lg list-disc list-inside">
      {children}
    </ul>
  ) : (
    <ol className="pl-4 mt-8 space-y-2 text-lg list-decimal list-inside">
      {children}
    </ol>
  );
};

const ListItem = (props) => {
  return <li>{props.children}</li>;
};

const BlockRenderer = (props) => {
  const { style = "normal" } = props.node;
  const { children } = props;

  if (/^h\d/.test(style)) {
    const level = parseInt(style.replace(/[^\d]/g, ""));
    return <Heading level={level}>{children}</Heading>;
  }

  if (style === "blockquote") {
    return (
      <blockquote className="mt-8 text-xl opacity-75">{children}</blockquote>
    );
  }

  if (style === "normal") {
    return <p className="mt-8 leading-loose">{children}</p>;
  }

  return BasePortableText.defaultSerializers.types.block(props);
};

export default {
  types: {
    authorReference: AuthorReference,
    code: CodeBlock,
    block: BlockRenderer,
  },
  marks: {
    code: InlineCode,
    link: Link,
  },
  list: List,
  listItem: ListItem,
  container: ({ children }) => <>{children}</>,
  hardBreak: false,
};
