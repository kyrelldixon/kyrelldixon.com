import React from "react";
import hydrate from "next-mdx-remote/hydrate";
import PageLayout from "components/page-layout";
import serializers from "components/serializers";
import { getSnippetPaths, getSnippet } from "lib/api";

export default function Snippet({ mdxSource, frontMatter }) {
  const { title, description } = frontMatter;
  const content = hydrate(mdxSource, serializers);

  return (
    <PageLayout>
      <article className="max-w-3xl px-4 pt-8 mx-auto">
        <header className="text-center">
          <h1 className="mb-10 text-5xl font-extrabold leading-tight md:text-6xl xl:text-7xl">
            {title}
          </h1>
          <h2 className="mb-6 text-lg leading-snug md:text-xl">
            {description}
          </h2>
        </header>
        <main className="max-w-2xl mx-auto">{content}</main>
      </article>
    </PageLayout>
  );
}

export async function getStaticPaths() {
  const paths = await getSnippetPaths();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const { mdx, frontMatter } = await getSnippet(slug);
  return {
    props: {
      mdxSource: mdx,
      frontMatter,
    },
  };
}
