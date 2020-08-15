import Link from "next/link";
// import PortableText from "./portable-text";
import toTitleCase from "utils/to-title-case";

export default function BlogList({ posts }) {
  const gradients = [
    "hover:text-f-blue",
    "hover:text-f-green",
    "hover:text-f-yellow",
    "hover:text-f-teal",
    "hover:text-f-purple",
    "hover:text-f-red",
  ];

  return (
    <ul className="space-y-14">
      {posts.map((post, i) => (
        <li key={post._id}>
          <h2
            className={`transition-colors duration-200 ease-in-out ${
              gradients[i % gradients.length]
            } pb-4 text-3xl font-extrabold leading-tight text-center md:text-5xl lg:text-6xl`}
          >
            <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
              <a>{toTitleCase(post.title)}</a>
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
