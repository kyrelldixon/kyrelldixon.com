import PageLayout from "components/page-layout";
import Icon from "components/icon";

export default function Projects() {
  return (
    <PageLayout>
      <main className="px-4">
        <section className="max-w-4xl py-12 mx-auto text-center md:py-16">
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl xl:text-7xl">
            Projects
          </h1>
        </section>
        <section className="grid max-w-3xl grid-flow-row grid-cols-1 gap-4 py-8 mx-auto md:gap-8 md:grid-cols-2">
          <div className="p-8 bg-gray-900 rounded-lg shadow-md">
            <h3 className="text-lg font-extrabold">Copy to Clipboard</h3>
            <div className="flex mt-4">
              <a
                className="flex items-center mr-8 transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="#"
                target="_blank"
              >
                <span className="mr-1">
                  <Icon name="external-link" />
                </span>
                Demo
              </a>
              <a
                className="flex items-center transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="#"
                target="_blank"
              >
                <span className="mr-1">
                  <Icon name="github" />
                </span>
                Source Code
              </a>
            </div>
          </div>
          <div className="p-8 bg-gray-900 rounded-lg shadow-md">
            <h3 className="text-lg font-extrabold">Huddle Landing Page</h3>
            <div className="flex mt-4">
              <a
                className="flex items-center mr-8 transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="#"
                target="_blank"
              >
                <span className="mr-1">
                  <Icon name="external-link" />
                </span>
                Demo
              </a>
              <a
                className="flex items-center transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="#"
                target="_blank"
              >
                <span className="mr-1">
                  <Icon name="github" />
                </span>
                Source Code
              </a>
            </div>
          </div>
          <div className="p-8 bg-gray-900 rounded-lg shadow-md">
            <h3 className="text-lg font-extrabold">Flip Book</h3>
            <div className="flex mt-4">
              <a
                className="flex items-center mr-8 transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="#"
                target="_blank"
              >
                <span className="mr-1">
                  <Icon name="external-link" />
                </span>
                Demo
              </a>
              <a
                className="flex items-center transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="#"
                target="_blank"
              >
                <span className="mr-1">
                  <Icon name="github" />
                </span>
                Source Code
              </a>
            </div>
          </div>
          <div className="p-8 bg-gray-900 rounded-lg shadow-md">
            <h3 className="text-lg font-extrabold">Recipe Site Skeleton</h3>
            <div className="flex mt-4">
              <a
                className="flex items-center mr-8 transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="#"
                target="_blank"
              >
                <span className="mr-1">
                  <Icon name="external-link" />
                </span>
                Demo
              </a>
              <a
                className="flex items-center transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="#"
                target="_blank"
              >
                <span className="mr-1">
                  <Icon name="github" />
                </span>
                Source Code
              </a>
            </div>
          </div>
          <div className="p-8 bg-gray-900 rounded-lg shadow-md">
            <h3 className="text-lg font-extrabold">
              Browser Tab Notifications
            </h3>
            <div className="flex mt-4">
              <a
                className="flex items-center mr-8 transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="#"
                target="_blank"
              >
                <span className="mr-1">
                  <Icon name="external-link" />
                </span>
                Demo
              </a>
              <a
                className="flex items-center transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="#"
                target="_blank"
              >
                <span className="mr-1">
                  <Icon name="github" />
                </span>
                Source Code
              </a>
            </div>
          </div>
          <div className="p-8 bg-gray-900 rounded-lg shadow-md">
            <h3 className="text-lg font-extrabold">Dark Mode Toggle</h3>
            <div className="flex mt-4">
              <a
                className="flex items-center mr-8 transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="#"
                target="_blank"
              >
                <span className="mr-1">
                  <Icon name="external-link" />
                </span>
                Demo
              </a>
              <a
                className="flex items-center transition duration-200 ease-in-out opacity-75 hover:opacity-100"
                href="#"
                target="_blank"
              >
                <span className="mr-1">
                  <Icon name="github" />
                </span>
                Source Code
              </a>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
