import Link from "next/link";

export default function MobileNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 w-full bg-white md:hidden">
      <ul className="flex items-end justify-around h-full px-2 py-2 text-sm font-semibold">
        <li>
          <Link href="/blog">
            <a>Articles</a>
          </Link>
        </li>
        <li>
          <Link href="/coaching">
            <a>Coaching</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/newsletter">
            <a>Newsletter</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
