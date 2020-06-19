import Link from "next/link";
import Icon from "./icon";

export default function MobileNav({ navLinks }) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-10 w-full bg-black shadow md:hidden">
      <ul className="flex items-end justify-around h-full p-2 text-xs">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>
              <a className="flex flex-col items-center">
                <span className="p-1 text-base">
                  <Icon name={link.icon} />
                </span>
                <span className="font-semibold">{link.title}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
