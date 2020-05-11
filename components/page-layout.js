import MobileNav from "./mobile-nav";

export default function PageLayout({ children, hideNav }) {
  return (
    <>
      {children}
      {!hideNav && <MobileNav />}
    </>
  );
}
