import { getAllPostsWithSlug, getPostAndMorePosts } from "lib/api";
import PageLayout from "components/page-layout";
import Feedback from "components/feedback";
import PortableText from "components/portable-text";

export default function BlogPost({ post, preview }) {
  const { title, excerpt, body } = post;
  return (
    <PageLayout hideNav preview={preview}>
      <article className="max-w-2xl mx-auto">
        <header className="text-center">
          <h1 className="mb-10 text-5xl font-semibold leading-tight md:text-6xl xl:text-7xl">
            {title}
          </h1>
          <h2 className="mb-6 text-xl leading-snug">
            {excerpt && <PortableText blocks={excerpt} />}
          </h2>
        </header>
        <div className="max-w-2xl mx-auto">
          <PortableText blocks={body} />
        </div>
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