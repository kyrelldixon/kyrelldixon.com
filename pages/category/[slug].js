import PageLayout from "components/page-layout";
import BlogList from "components/blog-list";
import { getCategories, getCategoryAndPosts } from "lib/api";

export default function CategoryPage({ preview, category, posts }) {
  return (
    <PageLayout preview={preview}>
      <main className="p-4">
        <h1 className="text-4xl font-semibold">{category.name}</h1>
        <section>
          <BlogList posts={posts} />
        </section>
      </main>
    </PageLayout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const { _id, name, posts, slug } = await getCategoryAndPosts(
    params.slug,
    preview
  );
  const category = { _id, name, slug };
  return {
    props: {
      preview,
      category,
      posts,
    },
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths:
      categories?.map((category) => ({
        params: {
          slug: category.slug,
        },
      })) || [],
    fallback: false,
  };
}
