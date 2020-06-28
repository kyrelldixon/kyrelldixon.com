import Header from "./header";
import Alert from "./alert";
import MobileNav from "./mobile-nav";

const navLinks = [
  { title: "Blog", href: "/", icon: "blog" },
  { title: "Coaching", href: "/coaching", icon: "video-chat" },
  { title: "Projects", href: "/projects", icon: "code" },
];

export default function PageLayout({ children, preview = false }) {
  return (
    <div className="pb-8 text-white bg-black md:pb-0 light:text-black light:bg-white">
      {preview && <Alert preview={preview} />}
      <Header navLinks={navLinks} />
      {children}
      <MobileNav navLinks={navLinks} />
    </div>
  );
}
