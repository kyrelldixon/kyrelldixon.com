import { getPostPaths, getPosts } from "../../lib/posts";

export default function BlogPost({ posts }) {
  return (
    <div>
      <article className="max-w-2xl mx-auto">
        <header className="text-center">
          <h1 className="mb-10 text-5xl font-semibold leading-tight md:text-6xl xl:text-7xl">
            {posts.title}
          </h1>
          <h2 className="mb-6 text-2xl leading-snug">{posts.excerpt}</h2>
        </header>
        <main
          className="space-y-4 lg:text-xl"
          dangerouslySetInnerHTML={{ __html: posts.contentHtml }}
        ></main>
      </article>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getPostPaths();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const posts = await getPosts(params.post);

  return {
    props: {
      posts,
    },
  };
}
