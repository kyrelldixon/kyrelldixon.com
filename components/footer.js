export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center py-8">
      <small>
        &copy; Kyrell Dixon <span>{new Date().getFullYear()}</span>
      </small>
    </footer>
  );
}
