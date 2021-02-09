import Header from "./header";
import Alert from "./alert";
import Footer from "./footer";

export default function PageLayout({ children, preview = false }) {
  return (
    <div className="max-w-2xl px-4 mx-auto">
      {preview && <Alert preview={preview} />}
      <Header />
      {children}
      <Footer />
    </div>
  );
}
