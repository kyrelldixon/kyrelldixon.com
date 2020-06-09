import { getAllPostsWithSlug, getPostAndMorePosts } from "lib/api";
import PageLayout from "components/page-layout";
import Feedback from "components/feedback";
import PortableText from "components/portable-text";

export default function BlogPost({ post, preview }) {
  const { title, excerpt, body } = post;
  return (
    <PageLayout preview={preview}>
      <article className="max-w-3xl px-2 pt-8 mx-auto md:px-4">
        <header className="text-center">
          <h1 className="mb-10 text-5xl font-extrabold leading-tight md:text-6xl xl:text-7xl">
            {title}
          </h1>
          <h2 className="mb-6 text-lg leading-snug md:text-xl">
            {excerpt && <PortableText blocks={excerpt} />}
          </h2>
        </header>
        <main className="max-w-2xl mx-auto space-y-6">
          <PortableText blocks={body} />
        </main>
      </article>
      <Feedback />
    </PageLayout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  return {
    props: {
      preview,
      post: data.post || null,
      morePosts: data.morePosts || null,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: false,
  };
}
