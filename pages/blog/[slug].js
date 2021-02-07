import "prismjs/themes/prism-okaidia.css";
import hydrate from "next-mdx-remote/hydrate";
import { useRouter } from "next/router";
import PageLayout from "components/page-layout";
import SEO from "components/seo";
import { getAllMdxPathsNotSecret, getMdxPost } from "lib/mdx";
import { getPostBySlug, getPosts } from "lib/ghost";
import { useSyntaxHighlighting } from "../../hooks/useSyntaxHighlighting";

export default function BlogPost({
  mdxSource,
  frontMatter,
  ghostPost,
  isGhostPost,
}) {
  const { title, excerpt } = !isGhostPost ? frontMatter : ghostPost;
  const content = !isGhostPost ? hydrate(mdxSource) : ghostPost.html;
  const router = useRouter();
  const fullUrl = `${router.asPath}`;

  useSyntaxHighlighting(content);

  return (
    <PageLayout>
      <SEO title={title} description={excerpt} url={fullUrl} />
      <article className="max-w-2xl pt-8 mx-auto">
        <header className="text-center">
          <h1 className="mb-10 text-5xl font-extrabold leading-tight md:text-6xl xl:text-7xl">
            {title}
          </h1>
          <p className="mb-6 text-lg leading-snug md:text-xl">{excerpt}</p>
        </header>
        {!isGhostPost ? (
          <main className="prose md:prose-lg">{content}</main>
        ) : (
          <main
            className="prose md:prose-lg"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </article>
    </PageLayout>
  );
}

export async function getStaticPaths() {
  const mdxPaths = await getAllMdxPathsNotSecret();
  const ghostPosts = await getPosts();

  const ghostPaths = ghostPosts.map(({ slug }) => ({
    params: { slug },
  }));

  const paths = [...mdxPaths, ...ghostPaths];

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const mdxPaths = await getAllMdxPathsNotSecret();

  if (mdxPaths.some((val) => val.params.slug === slug)) {
    const { mdx, frontMatter } = await getMdxPost(slug);
    return {
      props: {
        mdxSource: mdx,
        frontMatter,
        isGhostPost: false,
      },
    };
  }

  const ghostPost = await getPostBySlug(slug);

  return {
    props: {
      ghostPost,
      isGhostPost: true,
    },
  };
}
