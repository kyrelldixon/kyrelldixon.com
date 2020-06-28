import PageLayout from "components/page-layout";
import Icon from "components/icon";
import Link from "components/link";

export default function Projects() {
  return (
    <PageLayout>
      <main className="px-4">
        <section className="max-w-4xl py-12 mx-auto text-center md:py-16">
          <h1 className="text-5xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
            Projects
          </h1>
        </section>
        <section className="grid max-w-3xl grid-flow-row grid-cols-1 gap-4 py-8 mx-auto md:gap-8 md:grid-cols-2">
          <div className="p-8 bg-gray-900 rounded-lg shadow-md light:bg-gray-100">
            <h3 className="text-lg font-extrabold">Write More App</h3>
            <div className="flex mt-4">
              <Link
                className="flex items-center mr-8 transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="https://write-more.now.sh/"
              >
                <span className="mr-1">
                  <Icon name="external-link" />
                </span>
                Demo
              </Link>
              <Link
                className="flex items-center transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="https://github.com/kyrelldixon/write-more"
              >
                <span className="mr-1">
                  <Icon name="github" />
                </span>
                Source Code
              </Link>
            </div>
          </div>
          <div className="p-8 bg-gray-900 rounded-lg shadow-md light:bg-gray-100">
            <h3 className="text-lg font-extrabold">Huddle Landing Page</h3>
            <div className="flex mt-4">
              <Link
                className="flex items-center mr-8 transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="https://huddle-landing-demo.now.sh/"
                target="_blank"
              >
                <span className="mr-1">
                  <Icon name="external-link" />
                </span>
                Demo
              </Link>
              <Link
                className="flex items-center transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="https://github.com/kyrelldixon/huddle-landing-page"
                target="_blank"
              >
                <span className="mr-1">
                  <Icon name="github" />
                </span>
                Source Code
              </Link>
            </div>
          </div>
          <div className="p-8 bg-gray-900 rounded-lg shadow-md light:bg-gray-100">
            <h3 className="text-lg font-extrabold">Lonely Planet</h3>
            <div className="flex mt-4">
              <Link
                className="flex items-center mr-8 transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="https://lonely-planet.now.sh/"
                target="_blank"
              >
                <span className="mr-1">
                  <Icon name="external-link" />
                </span>
                Demo
              </Link>
              <Link
                className="flex items-center transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="https://github.com/kyrelldixon/lonely-planet"
                target="_blank"
              >
                <span className="mr-1">
                  <Icon name="github" />
                </span>
                Source Code
              </Link>
            </div>
          </div>
          <div className="p-8 bg-gray-900 rounded-lg shadow-md light:bg-gray-100">
            <h3 className="text-lg font-extrabold">Recipe Site Skeleton</h3>
            <div className="flex mt-4">
              <Link
                className="flex items-center mr-8 transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="https://recipe-skeleton.vercel.app/"
                target="_blank"
              >
                <span className="mr-1">
                  <Icon name="external-link" />
                </span>
                Demo
              </Link>
              <Link
                className="flex items-center transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="https://github.com/kyrelldixon/recipe"
                target="_blank"
              >
                <span className="mr-1">
                  <Icon name="github" />
                </span>
                Source Code
              </Link>
            </div>
          </div>
          <div className="p-8 bg-gray-900 rounded-lg shadow-md light:bg-gray-100">
            <h3 className="text-lg font-extrabold">Core Values</h3>
            <div className="flex mt-4">
              <Link
                className="flex items-center mr-8 transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="https://values.netlify.app/"
                target="_blank"
              >
                <span className="mr-1">
                  <Icon name="external-link" />
                </span>
                Demo
              </Link>
              <Link
                className="flex items-center transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="https://github.com/kyrelldixon/values"
                target="_blank"
              >
                <span className="mr-1">
                  <Icon name="github" />
                </span>
                Source Code
              </Link>
            </div>
          </div>
          <div className="p-8 bg-gray-900 rounded-lg shadow-md light:bg-gray-100">
            <h3 className="text-lg font-extrabold">Shopify Demo App</h3>
            <div className="flex mt-4">
              <Link
                className="flex items-center transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="https://github.com/kyrelldixon/shopify-demo-app-hooks"
                target="_blank"
              >
                <span className="mr-1">
                  <Icon name="github" />
                </span>
                Source Code
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
