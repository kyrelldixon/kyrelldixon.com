import Header from "./header";
import Alert from "./alert";
import MobileNav from "./mobile-nav";
import Footer from "./footer";

const navLinks = [{ title: "Blog", href: "/", icon: "blog" }];

export default function PageLayout({ children, preview = false }) {
  return (
    <div className="px-8 pb-12 md:pb-0">
      {preview && <Alert preview={preview} />}
      <Header navLinks={navLinks} />
      {children}
      <Footer />
    </div>
  );
}
