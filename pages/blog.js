import BlogList from "components/blog-list";
import MostPopular from "components/most-popular";
import PageLayout from "components/page-layout";
import CategoryList from "components/category-list";

import { getSortedPosts, getCategories } from "lib/posts";

export default function BlogPage({ posts, categories }) {
  const mostPopularPosts = posts.slice(0, 5);
  return (
    <PageLayout>
      <main className="grid grid-flow-col col-gap-16 p-4">
        <section>
          <BlogList posts={posts} />
        </section>
        <section className="hidden max-w-xs space-y-8 md:block">
          <MostPopular posts={mostPopularPosts} />
          <CategoryList categories={categories} />
        </section>
      </main>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const posts = getSortedPosts();
  const categories = getCategories();
  return {
    props: {
      posts,
      categories,
    },
  };
}
