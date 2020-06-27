import NextLink from "next/link";

export default function Link({
  href,
  children,
  className = "text-blue-500",
  ...rest
}) {
  const isExternal = href.includes("http");

  console.log({ href, isExternal });
  return isExternal ? (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
    </a>
  ) : (
    <NextLink href={href} {...rest}>
      <a className={className}>{children}</a>
    </NextLink>
  );
}
