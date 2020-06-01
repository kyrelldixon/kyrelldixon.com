import Link from "next/link";
import PortableText from "./portable-text";

export default function BlogList({ posts }) {
  return (
    <div>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post._id}>
            <Link href="/blog/[post]" as={`/blog/${post.slug}`}>
              <a className="text-center">
                <h2 className="mb-4 text-4xl font-semibold leading-tight lg:text-5xl">
                  {post.title}
                </h2>
                {post.excerpt && <PortableText blocks={post.excerpt} />}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
