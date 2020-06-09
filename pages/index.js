import BlogList from "components/blog-list";
import PageLayout from "components/page-layout";

import { getAllPostsForBlog } from "lib/api";

export default function BlogPage({ posts }) {
  return (
    <PageLayout>
      <main className="grid grid-flow-col col-gap-16 p-4">
        <section className="max-w-3xl pt-8 mx-auto">
          <BlogList posts={posts} />
        </section>
      </main>
    </PageLayout>
  );
}

export async function getStaticProps(preview = false) {
  const posts = await getAllPostsForBlog(preview);

  return {
    props: {
      posts,
    },
  };
}
