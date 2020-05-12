import MobileNav from "./mobile-nav";
import Header from "./header";

const navLinks = [
  { title: "Articles", href: "/blog", icon: "blog" },
  { title: "Coaching", href: "/coaching", icon: "code" },
  { title: "About", href: "/about", icon: "profile" },
  { title: "Newsletter", href: "/newsletter", icon: "email" },
  { title: "Contact", href: "/contact", icon: "contacts" },
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
