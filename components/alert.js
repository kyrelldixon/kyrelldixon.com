export default function Alert() {
  return (
    <div className="text-white bg-black border-b">
      <div>
        <div className="py-2 text-sm text-center">
          <>
            This page is a preview.{" "}
            <a
              href="/api/exit-preview"
              className="underline transition-colors duration-200 hover:text-cyan"
            >
              Click here
            </a>{" "}
            to exit preview mode.
          </>
        </div>
      </div>
    </div>
  );
}
