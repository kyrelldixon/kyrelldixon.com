import hydrate from "next-mdx-remote/hydrate";
import { useRouter } from "next/router";
import PageLayout from "components/page-layout";
import Newsletter from "components/newsletter";
import SEO from "components/seo";
import { getAllMdxPathsNotSecret, getMdxPost } from "lib/api";

export default function BlogPost({ mdxSource, frontMatter }) {
  const { title, excerpt, body } = frontMatter;
  const content = hydrate(mdxSource);
  const router = useRouter();
  const fullUrl = `${router.asPath}`;

  return (
    <PageLayout>
      <SEO title={title} description={excerpt} url={fullUrl} />
      <article className="max-w-3xl px-4 pt-8 mx-auto">
        <header className="text-center">
          <h1 className="mb-10 text-5xl font-extrabold leading-tight md:text-6xl xl:text-7xl">
            {title}
          </h1>
          <p className="mb-6 text-lg leading-snug md:text-xl">{excerpt}</p>
        </header>
        <main className="prose md:prose-lg">{content}</main>
      </article>
      <div className="px-4 py-16">
        <Newsletter />
      </div>
    </PageLayout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllMdxPathsNotSecret();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const { mdx, frontMatter } = await getMdxPost(slug);
  return {
    props: {
      mdxSource: mdx,
      frontMatter,
    },
  };
}
