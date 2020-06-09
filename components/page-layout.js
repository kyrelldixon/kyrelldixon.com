import Header from "./header";
import Alert from "./alert";

const navLinks = [];

export default function PageLayout({ children, preview = false }) {
  return (
    <>
      {preview && <Alert preview={preview} />}
      <Header navLinks={navLinks} />
      {children}
    </>
  );
}
