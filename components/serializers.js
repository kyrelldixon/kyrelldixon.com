import BasePortableText from "@sanity/block-content-to-react";

const AuthorReference = ({ node }) => {
  if (node && node.author && node.author.name) {
    return <span>{node.author.name}</span>;
  }
  return <></>;
};

const InlineCode = (props) => {
  return <code>{props.children}</code>;
};

const CodeBlock = (props) => {
  return (
    <pre className="text-sm" data-language={props.node.language}>
      <code>{props.node.code}</code>
    </pre>
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
    <H className={`font-semibold ${getHeadingSize()} ${className}`}>
      {children}
    </H>
  );
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

  // Fall back to default handling
  console.log(BasePortableText.defaultSerializers.types.block(props));
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
  },
  hardBreak: false,
};
