import Link from "next/link";

export default function MostPopular({ posts }) {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">Most Popular</h2>
      <ol className="space-y-4 text-lg">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href="blog/[post]" as={`blog${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
