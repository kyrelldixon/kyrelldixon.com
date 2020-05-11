import Link from "next/link";

export default function BlogList({ posts }) {
  return (
    <div>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href="blog/[post]" as={`blog/${post.slug}`}>
              <a className="text-center">
                <h2 className="mb-4 text-4xl font-semibold leading-tight lg:text-5xl">
                  {post.title}
                </h2>
                <p className="text-lg">{post.excerpt}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
