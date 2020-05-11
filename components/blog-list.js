import Link from "next/link";

export default function BlogList({ posts }) {
  return (
    <div>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.folderName}>
            <Link href="blog/[post]" as={"blog/" + post.folderName}>
              <a className="text-center">
                <h2 className="mb-4 text-5xl font-semibold leading-tight">
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
