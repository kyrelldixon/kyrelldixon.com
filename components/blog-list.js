import Link from "next/link";

export default function BlogList() {
  return (
    <div>
      <ul className="space-y-4">
        <li>
          <Link href="blog/post">
            <a className="text-center">
              <h2 className="mb-4 text-5xl font-semibold leading-tight">
                Games are the new platform you want to be part of
              </h2>
              <p className="text-lg">
                More than 12.3 million players joined Fortnite's live virtual
                concert with rapper Travis Scott on April 23, in which he
                introduced his new single and partnership with Kid Cudi. It was
                the largest in-game event ever.
              </p>
            </a>
          </Link>
        </li>
        <li>
          <Link href="blog/post">
            <a className="text-center">
              <h2 className="mb-4 text-5xl font-semibold leading-tight">
                Games are the new platform you want to be part of
              </h2>
              <p className="text-lg">
                More than 12.3 million players joined Fortnite's live virtual
                concert with rapper Travis Scott on April 23, in which he
                introduced his new single and partnership with Kid Cudi. It was
                the largest in-game event ever.
              </p>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
