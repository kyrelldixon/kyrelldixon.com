import BlogList from "components/blog-list";
import PageLayout from "components/page-layout";
import SEO from "components/seo";
import { getSortedPosts } from "lib/api";
import { getPosts } from "lib/ghost";

export default function BlogPage({ posts, ghostPosts }) {
  const allPosts = [...posts, ...ghostPosts];
  return (
    <PageLayout>
      <SEO title="Home" />
      <main className="py-4">
        <section className="max-w-2xl py-8 mx-auto">
          <BlogList posts={allPosts} />
        </section>
      </main>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const posts = await getSortedPosts();
  const ghostPosts = await getPosts();

  return {
    props: {
      posts,
      ghostPosts,
    },
  };
}
