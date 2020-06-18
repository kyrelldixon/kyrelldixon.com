import Header from "./header";
import Alert from "./alert";
import MobileNav from "./mobile-nav";

const navLinks = [{ title: "Blog", href: "/blog", icon: "blog" }];

export default function PageLayout({ children, preview = false }) {
  return (
    <div className="pb-8 text-white bg-black md:pb-0">
      {preview && <Alert preview={preview} />}
      <Header navLinks={navLinks} />
      {children}
      <MobileNav navLinks={navLinks} />
    </div>
  );
}
