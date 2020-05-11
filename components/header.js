import Link from "next/link";

export default function Header({ navLinks }) {
  return (
    <header className="sticky inset-x-0 top-0 flex items-center justify-between p-4 bg-white">
      <Link href="/">
        <a title="Go to Homepage">
          <h1 className="text-lg font-semibold">Kyrell Dixon</h1>
        </a>
      </Link>
      <nav>
        <ul className="hidden space-x-8 text-sm md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <a>{link.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link href="/coaching">
        <a className="px-4 py-2 text-xs text-white bg-black rounded md:text-sm">
          Work With Me
        </a>
      </Link>
    </header>
  );
}
