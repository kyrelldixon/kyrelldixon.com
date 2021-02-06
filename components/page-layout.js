import Header from "./header";
import Alert from "./alert";
import Footer from "./footer";

export default function PageLayout({ children, preview = false }) {
  return (
    <div className="px-8 pb-12 md:pb-0">
      {preview && <Alert preview={preview} />}
      <Header />
      {children}
      <Footer />
    </div>
  );
}
