import BlogList from "components/blog-list";
import PageLayout from "components/page-layout";

import { getAllPostsForBlog, getAllPostsForBlogNotSecret } from "lib/api";

export default function BlogPage({ posts }) {
  return (
    <PageLayout>
      <main className="grid grid-flow-col col-gap-16 p-4">
        <section className="max-w-4xl py-8 mx-auto">
          <BlogList posts={posts} />
        </section>
      </main>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const getPosts =
    process.env.NODE_ENV === "development"
      ? getAllPostsForBlog
      : getAllPostsForBlogNotSecret;
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
}
