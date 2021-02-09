import Link from "next/link";
import { useRouter } from "next/router";

const navItems = [{ title: "Blog", href: "/", icon: "blog" }];

export default function Header() {
  const router = useRouter();

  return (
    <header className="py-8">
      <div className="flex items-baseline justify-between max-w-2xl mx-auto">
        <Link href="/">
          <a className="text-xl font-bold" title="Go to Homepage">
            Kyrell Dixon
          </a>
        </Link>
        <Nav navItems={navItems} />
      </div>
    </header>
  );
}

function Nav({ navItems }) {
  return (
    <nav>
      <ul className="flex space-x-6 text-sm font-semibold">
        {navItems.map(({ title, href }) => (
          <NavItem key={href}>
            <Link href={href}>
              <a>{title}</a>
            </Link>
          </NavItem>
        ))}
        <NavItem>
          <a href="https://twitter.com/kyrelldixon" target="_blank">
            Twitter
          </a>
        </NavItem>
      </ul>
    </nav>
  );
}

function NavItem({ children }) {
  return (
    <li className="transition duration-200 ease-in-out opacity-75 hover:opacity-100">
      {children}
    </li>
  );
}
