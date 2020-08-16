import Link from "next/link";
import toTitleCase from "utils/to-title-case";
import { gradients } from "styles/gradients";

export default function BlogList({ posts }) {
  return (
    <ul className="space-y-14">
      {posts.map((post, i) => (
        <li key={post.slug}>
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
              <p>{post.excerpt}</p>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
