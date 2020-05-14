import BlogList from "components/blog-list";
import MostPopular from "components/most-popular";
import PageLayout from "components/page-layout";

import { getAllPostsForBlog } from "lib/api";

export default function BlogPage({ posts }) {
  const mostPopularPosts = posts.slice(0, 5);

  return (
    <PageLayout>
      <main className="grid grid-flow-col col-gap-16 p-4">
        <section>
          <BlogList posts={posts} />
        </section>
        <section className="hidden max-w-xs space-y-8 md:block">
          <MostPopular posts={mostPopularPosts} />
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
