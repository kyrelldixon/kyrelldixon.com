import { useEffect, useState } from "react";
import NextLink from "next/link";
import Highlight, { defaultProps } from "prism-react-renderer";
import darkTheme from "prism-react-renderer/themes/nightOwl";
import lightTheme from "prism-react-renderer/themes/nightOwlLight";

const Link = ({ href, children }) => {
  const isExternal = href.includes("http");
  const className = "text-blue-500";
  return isExternal ? (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ) : (
    <NextLink href={href}>
      <a className={className}>{children}</a>
    </NextLink>
  );
};

export const InlineCode = (props) => {
  return <code className="p-1 text-gray-500">{props.children}</code>;
};

export const CodeBlock = ({ children, className }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return darkTheme;
    }

    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)")
      .matches;
    return isDarkMode ? darkTheme : lightTheme;
  });
  const language = className.replace(/language-/, "");
  const code = children.trim();

  useEffect(() => {
    const handleSetTheme = (event) => {
      if (event.matches) {
        setTheme(darkTheme);
      } else {
        setTheme(lightTheme);
      }
    };

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleSetTheme);

    return () =>
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleSetTheme);
  }, [darkTheme, lightTheme]);

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

const OrderedList = ({ children }) => (
  <ol className="pl-4 mt-8 space-y-2 text-lg list-decimal list-inside">
    {children}
  </ol>
);

const UnorderedList = ({ children }) => (
  <ul className="pl-4 mt-8 space-y-2 text-lg list-disc list-inside">
    {children}
  </ul>
);

const ListItem = ({ children }) => <li>{children}</li>;

const BlockQuote = ({ children }) => (
  <blockquote className="mt-8 text-xl opacity-75">{children}</blockquote>
);

const Paragraph = ({ children }) => (
  <p className="mt-8 leading-loose">{children}</p>
);

const headings = {};
for (let level = 1; level <= 6; ++level) {
  headings[`h${level}`] = ({ children }) => (
    <Heading level={level}>{children}</Heading>
  );
}

export default {
  p: Paragraph,
  code: CodeBlock,
  blockquote: BlockQuote,
  inlineCode: InlineCode,
  a: Link,
  ol: OrderedList,
  ul: UnorderedList,
  li: ListItem,
  ...headings,
};
