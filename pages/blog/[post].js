import { getPostPaths, getPost } from "../../lib/posts";
import PageLayout from "../../components/page-layout";
import Feedback from "../../components/feedback";

export default function BlogPost({ post }) {
  return (
    <PageLayout hideNav>
      <article className="max-w-2xl mx-auto">
        <header className="text-center">
          <h1 className="mb-10 text-5xl font-semibold leading-tight md:text-6xl xl:text-7xl">
            {post.title}
          </h1>
          <h2 className="mb-6 text-2xl leading-snug">{post.excerpt}</h2>
        </header>
        <main
          className="space-y-4 lg:text-xl"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        ></main>
      </article>
      <Feedback />
    </PageLayout>
  );
}

export function getStaticPaths() {
  const paths = getPostPaths();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.post);
  return {
    props: {
      post,
    },
  };
}
