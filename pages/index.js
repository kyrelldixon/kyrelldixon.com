import BlogList from "components/blog-list";
import PageLayout from "components/page-layout";
import SEO from "components/seo";
import { getSortedPosts } from "lib/mdx";
import { getPosts } from "lib/ghost";

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
  const mdxPosts = await getSortedPosts();
  const ghostPosts = await getPosts();
  const posts = [
    ...mdxPosts,
    ...ghostPosts.map((post) => ({
      date: post.updated_at,
      excerpt: post.excerpt,
      title: post.title,
      slug: post.slug,
    })),
  ];

  posts.sort(mostRecentDateFirst);

  return {
    props: {
      posts,
    },
  };
}

function mostRecentDateFirst(a, b) {
  return new Date(b.date) - new Date(a.date);
}
