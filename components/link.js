import NextLink from "next/link";

export default function Link(props) {
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
}
