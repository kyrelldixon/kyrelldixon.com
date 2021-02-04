import Link from "next/link";
import { useRouter } from "next/router";

export default function Header({ navLinks }) {
  const router = useRouter();

  return (
    <header className="inset-x-0 top-0 z-10 py-8">
      <div className="flex items-center justify-between max-w-2xl mx-auto">
        <Link href="/">
          <a title="Go to Homepage">
            <h1 className="text-xl font-bold">Kyrell Dixon</h1>
          </a>
        </Link>
        <nav>
          <ul className="flex space-x-6 text-sm font-semibold">
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
