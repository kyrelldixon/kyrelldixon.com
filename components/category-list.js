import Link from "next/link";

export default function CategoryList({ categories }) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold">Popular Topics</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category._id}>
            <Link href="/category/[category]" as={`/category/${category.slug}`}>
              <a>{category.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
