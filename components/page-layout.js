import Header from "./header";
import Alert from "./alert";

const navLinks = [];

export default function PageLayout({ children, preview = false }) {
  return (
    <div className="text-white bg-black">
      {preview && <Alert preview={preview} />}
      <Header navLinks={navLinks} />
      {children}
    </div>
  );
}
