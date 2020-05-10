import BlogList from "../components/blog-list";
import MostPopular from "../components/most-popular";

export default function BlogPage() {
  return (
    <main className="grid grid-flow-col col-gap-16 p-4">
      <section>
        <BlogList />
      </section>
      <section className="hidden max-w-xs md:block">
        <MostPopular />
      </section>
    </main>
  );
}
