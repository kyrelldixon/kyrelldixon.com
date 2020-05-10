import Link from "next/link";

export default function MostPopular() {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">Most Popular</h2>
      <ol className="space-y-4 text-lg">
        <li>
          <Link href="/blog/post">
            <a>The most popular blog post</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/post">
            <a>The second most popular blog post</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/post">
            <a>The third most popular blog post</a>
          </Link>
        </li>
      </ol>
    </div>
  );
}
