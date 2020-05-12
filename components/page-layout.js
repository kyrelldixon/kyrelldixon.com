import MobileNav from "./mobile-nav";
import Header from "./header";
import Banner from "./banner";

const navLinks = [
  { title: "Articles", href: "/blog", icon: "blog" },
  { title: "Coaching", href: "/coaching", icon: "code" },
  { title: "About", href: "/about", icon: "profile" },
  { title: "Newsletter", href: "/newsletter", icon: "email" },
  { title: "Contact", href: "/contact", icon: "contacts" },
];

export default function PageLayout({ children, hideNav, hideBanner }) {
  return (
    <>
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
