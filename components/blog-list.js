import Link from "next/link";
import PortableText from "./portable-text";
import toTitleCase from "utils/to-title-case";

export default function BlogList({ posts }) {
  return (
    <ul className="space-y-14">
      {posts.map((post) => (
        <li key={post._id}>
          <h2 className="pb-4 text-3xl font-extrabold leading-tight text-center md:text-5xl lg:text-6xl">
            <Link href="/blog/[post]" as={`/blog/${post.slug}`}>
              <a className="hover:underline">{toTitleCase(post.title)}</a>
            </Link>
          </h2>
          {post.excerpt && (
            <div className="max-w-md mx-auto text-sm md:max-w-xl md:text-base">
              <PortableText blocks={post.excerpt} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
