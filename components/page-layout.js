import MobileNav from "./mobile-nav";
import Header from "./header";
import Banner from "./banner";

function Alert({ preview }) {
  return (
    <div
      className={`border-b ${preview ? "bg-black text-white" : "bg-blue-200"}`}
    >
      <div>
        <div className="py-2 text-sm text-center">
          {preview ? (
            <>
              This page is a preview.{" "}
              <a
                href="/api/exit-preview"
                className="underline transition-colors duration-200 hover:text-cyan"
              >
                Click here
              </a>{" "}
              to exit preview mode.
            </>
          ) : (
            <>
              The source code for this blog is{" "}
              <a
                href={`https://github.com/zeit/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                className="underline transition-colors duration-200 hover:text-success"
              >
                available on GitHub
              </a>
              .
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const navLinks = [
  { title: "Articles", href: "/blog", icon: "blog" },
  { title: "Coaching", href: "/coaching", icon: "code" },
  { title: "About", href: "/about", icon: "profile" },
  { title: "Newsletter", href: "/newsletter", icon: "email" },
  { title: "Contact", href: "/contact", icon: "contacts" },
];

export default function PageLayout({ children, hideNav, hideBanner, preview }) {
  return (
    <>
      {preview && <Alert preview={preview} />}
      {!hideBanner && (
        <Banner>
          <p>This is my banner content</p>
        </Banner>
      )}
      <Header navLinks={navLinks} />
      {children}
      {!hideNav && <MobileNav navLinks={navLinks} />}
    </>
  );
}
