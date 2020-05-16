import PageLayout from "components/page-layout";
import { getCategories, getCategoryAndPosts } from "lib/api";

export default function CategoryPage({ preview, category }) {
  return (
    <PageLayout preview={preview}>
      <main>
        <h1>{category.name}</h1>
      </main>
    </PageLayout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const category = await getCategoryAndPosts(params.slug, preview);
  return {
    props: {
      preview,
      category,
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
