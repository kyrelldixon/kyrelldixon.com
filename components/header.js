import Link from "next/link";
import { useRouter } from "next/router";

export default function Header({ navLinks }) {
  const router = useRouter();

  return (
    <header className="inset-x-0 top-0 z-10 px-8 py-8 bg-black">
      <div className="flex items-center justify-center max-w-4xl mx-auto text-center md:justify-between md:text-left">
        <Link href="/">
          <a title="Go to Homepage">
            <h1 className="text-xl font-bold">Kyrell Dixon</h1>
          </a>
        </Link>
        <nav className="">
          <ul className="hidden space-x-6 text-sm font-semibold md:flex">
            {navLinks.map(({ title, href }, i) => (
              <li
                className={`transition duration-200 ease-in-out ${
                  router.pathname === href ? "" : "opacity-75 hover:opacity-100"
                }`}
                key={i}
              >
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
