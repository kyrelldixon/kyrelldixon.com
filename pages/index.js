import BlogList from "components/blog-list";
import PageLayout from "components/page-layout";
import SEO from "components/seo";
import { getSortedPosts } from "lib/api";

export default function BlogPage({ posts }) {
  return (
    <PageLayout>
      <SEO title="Home" />
      <main className="py-4">
        <section className="max-w-2xl py-8 mx-auto">
          <BlogList posts={posts} />
        </section>
      </main>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const posts = await getSortedPosts();

  return {
    props: {
      posts,
    },
  };
}
