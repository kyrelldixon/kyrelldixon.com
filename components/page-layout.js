import MobileNav from "./mobile-nav";
import Header from "./header";

const navLinks = [
  { title: "Articles", href: "/blog" },
  { title: "Coaching", href: "/coaching" },
  { title: "About", href: "/about" },
  { title: "Newsletter", href: "/newsletter" },
  { title: "Contact", href: "/contact" },
];

export default function PageLayout({ children, hideNav }) {
  return (
    <>
      <Header navLinks={navLinks} />
      {children}
      {!hideNav && <MobileNav navLinks={navLinks} />}
    </>
  );
}
