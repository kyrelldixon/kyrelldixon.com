import PageLayout from "components/page-layout";
import Icon from "components/icon";
import Link from "components/link";
import { getSnippets } from "lib/api";

export default function Snippets({ snippets }) {
  return (
    <PageLayout>
      <main className="px-4">
        <section className="flex flex-col items-center max-w-4xl py-10 text-center md:mx-auto md:py-8">
          <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
            Snippets
          </h1>
          <p className="max-w-lg text-lg font-semibold md:text-xl">
            A mini Stack Overflow with code recipes and helpful references for
            common issues.
          </p>
        </section>
        <section className="grid max-w-3xl grid-flow-row grid-cols-1 gap-4 py-8 mx-auto md:gap-8 md:grid-cols-2">
          {snippets.map((snippet) => (
            <Link
              key={snippet.slug}
              href={`snippets/${snippet.slug}`}
              className="p-8 space-y-4 bg-gray-900 rounded-lg shadow-md light:bg-gray-100"
            >
              <h2 className="text-xl font-black">{snippet.title}</h2>
              <p>{snippet.description}</p>
              <p>
                <span className="font-bold">Category:</span> {snippet.category}
              </p>
            </Link>
          ))}
        </section>
      </main>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const snippets = await getSnippets();

  return {
    props: {
      snippets,
    },
  };
}
