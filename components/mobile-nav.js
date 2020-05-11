import Link from "next/link";

export default function MobileNav({ navLinks }) {
  return (
    <nav className="fixed inset-x-0 bottom-0 w-full bg-white md:hidden">
      <ul className="flex items-end justify-around h-full px-2 py-2 text-xs font-semibold">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>
              <a>{link.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
