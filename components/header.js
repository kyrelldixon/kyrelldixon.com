import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 z-10 flex items-center justify-center p-4 bg-white">
      <Link href="/">
        <a title="Go to Homepage">
          <h1 className="text-lg font-semibold">Kyrell Dixon</h1>
        </a>
      </Link>
    </header>
  );
}
