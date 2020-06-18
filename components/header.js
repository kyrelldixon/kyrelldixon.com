import Link from "next/link";

export default function Header() {
  return (
    <header className="inset-x-0 top-0 z-10 px-8 py-8 bg-black">
      <div className="flex items-center justify-between max-w-4xl mx-auto">
        <Link href="/">
          <a title="Go to Homepage">
            <h1 className="text-xl font-bold">Kyrell Dixon</h1>
          </a>
        </Link>
        <nav className="">
          <ul className="hidden space-x-6 text-sm font-semibold uppercase md:flex">
            <li>
              <Link href="/">
                <a>Blog</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
