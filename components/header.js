import Link from "next/link";

export default function Header({ navLinks }) {
  return (
    <header className="inset-x-0 top-0 z-10 px-8 py-8 bg-black">
      <div className="flex items-center justify-center max-w-4xl mx-auto text-center md:justify-between md:text-left">
        <Link href="/">
          <a title="Go to Homepage">
            <h1 className="text-xl font-bold">Kyrell Dixon</h1>
          </a>
        </Link>
        <nav className="">
          <ul className="hidden space-x-6 text-sm uppercase md:flex">
            {navLinks.map(({ title, href }, i) => (
              <li key={i}>
                <Link href={href}>
                  <a>{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
