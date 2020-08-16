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
          <Project
            name="Write More App"
            site="https://write-more.now.sh/"
            github="https://github.com/kyrelldixon/write-more"
          />
          <Project
            name="Huddle Landing Page"
            site="https://huddle-landing-demo.now.sh/"
            github="https://github.com/kyrelldixon/huddle-landing-page"
          />
          <Project
            name="Lonely Planet"
            site="https://lonely-planet.now.sh/"
            github="https://github.com/kyrelldixon/lonely-planet"
          />
          <Project
            name="Recipe Site Skeleton"
            site="https://recipe-skeleton.vercel.app/"
            github="https://github.com/kyrelldixon/recipe"
          />
          <Project
            name="Core Values"
            site="https://values.netlify.app/"
            github="https://github.com/kyrelldixon/values"
          />
          <Project
            name="Shopify Demo App"
            github="https://github.com/kyrelldixon/shopify-demo-app-hooks"
          />
        </section>
      </main>
    </PageLayout>
  );
}

function Project({ name, site, github }) {
  return (
    <div className="p-8 bg-gray-900 rounded-lg shadow-md light:bg-gray-100">
      <h3 className="text-lg font-extrabold">{name}</h3>
      <div className="flex mt-4">
        {site && (
          <Link
            className="flex items-center mr-8 transition duration-200 ease-in-out opacity-75 hover:opacity-100"
            href={site}
          >
            <span className="mr-1">
              <Icon name="external-link" />
            </span>
            Demo
          </Link>
        )}
        {github && (
          <Link
            className="flex items-center transition duration-200 ease-in-out opacity-75 hover:opacity-100"
            href={github}
          >
            <span className="mr-1">
              <Icon name="github" />
            </span>
            Source Code
          </Link>
        )}
      </div>
    </div>
  );
}
