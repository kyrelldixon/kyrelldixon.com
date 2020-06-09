import BasePortableText from "@sanity/block-content-to-react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwlLight";

import Link from "./link";

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
          className={`text-sm overflow-x-scroll p-8 rounded mt-6 ${className}`}
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

  function getHeadingSize() {
    switch (level) {
      case 1:
        return "text-4xl";
      case 2:
        return "text-3xl";
      case 3:
        return "text-2xl";
      case 4:
        return "text-xl";
      default:
        return "text-base";
    }
  }

  return (
    <H className={`font-bold mt-12 ${getHeadingSize()} ${className}`}>
      {children}
    </H>
  );
};

const List = ({ children, type }) => {
  return type !== "number" ? (
    <ul className="mt-6 text-lg font-semibold list-disc list-inside">
      {children}
    </ul>
  ) : (
    <ol className="mt-6 text-lg font-semibold list-decimal list-inside">
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
    return <blockquote>{children}</blockquote>;
  }

  if (style === "normal") {
    return <p className="mt-6 leading-relaxed">{children}</p>;
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
