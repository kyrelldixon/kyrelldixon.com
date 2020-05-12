import Link from "next/link";
import { slugify } from "../lib/utils";

export default function CategoryList({ categories }) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold">Popular Topics</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category}>
            <Link
              href="category/[category]"
              as={`category/${slugify(category)}`}
            >
              <a>{category}</a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
