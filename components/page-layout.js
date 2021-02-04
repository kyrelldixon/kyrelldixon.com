import Header from "./header";
import Alert from "./alert";
import MobileNav from "./mobile-nav";
import Footer from "./footer";

const navLinks = [
  { title: "Blog", href: "/", icon: "blog" },
  { title: "Snippets", href: "/snippets", icon: "snippet" },
  { title: "Coaching", href: "/coaching", icon: "video-chat" },
  { title: "Projects", href: "/projects", icon: "code" },
];

export default function PageLayout({ children, preview = false }) {
  return (
    <div className="pb-12 md:pb-0">
      {preview && <Alert preview={preview} />}
      <Header navLinks={navLinks} />
      {children}
      <MobileNav navLinks={navLinks} />
      <Footer />
    </div>
  );
}
