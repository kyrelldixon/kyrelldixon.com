import { useState, useEffect, useRef } from "react";

export default function Feedback() {
  const formNode = useRef();
  const [fields, setFields] = useState({
    selectedEmoji: null,
    feedback: "",
  });
  const [open, setOpen] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleEmojiChange(e) {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
    setOpen(true);
  }

  function handleFeedbackChange(e) {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  }

  function handleClickOutside(e) {
    if (formNode.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setFields({
      selectedEmoji: null,
      feedback: "",
    });
    setOpen(false);
  }

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <form
      ref={formNode}
      className="max-w-sm py-12 mx-auto text-center"
      onSubmit={handleSubmit}
    >
      <h1 className="mb-6 font-semibold">How did you like this post?</h1>
      <ul className="flex justify-around w-48 mx-auto mb-4">
        <li>
          <input
            className="hidden"
            onChange={handleEmojiChange}
            type="radio"
            id="test"
            name="selectedEmoji"
            value="crying"
            checked={fields.selectedEmoji === "crying"}
          />
          <label
            className="inline-flex flex-col items-center leading-tight"
            htmlFor="test"
          >
            <span
              className={`transform text-2xl ${
                fields.selectedEmoji === "crying"
                  ? "scale-105"
                  : "grayscale scale-95"
              }`}
              role="img"
              aria-label="Hate it."
            >
              😭
            </span>
          </label>
        </li>
        <li>
          <input
            className="hidden"
            onChange={handleEmojiChange}
            type="radio"
            id="test2"
            name="selectedEmoji"
            value="confused"
            checked={fields.selectedEmoji === "confused"}
          />
          <label
            className="inline-flex flex-col items-center leading-tight"
            htmlFor="test2"
          >
            <span
              className={`transform text-2xl ${
                fields.selectedEmoji === "confused"
                  ? "scale-125"
                  : "grayscale scale-95"
              }`}
              role="img"
              aria-label="It's okay..."
            >
              😕
            </span>
          </label>
        </li>
        <li>
          <input
            className="hidden"
            onChange={handleEmojiChange}
            type="radio"
            id="test3"
            name="selectedEmoji"
            value="happy"
            checked={fields.selectedEmoji === "happy"}
          />
          <label
            className="inline-flex flex-col items-center leading-tight"
            htmlFor="test3"
          >
            <span
              className={`transform text-2xl ${
                fields.selectedEmoji === "happy"
                  ? "scale-125"
                  : "grayscale scale-95"
              }`}
              role="img"
              aria-label="It's good!"
            >
              😃
            </span>
          </label>
        </li>
        <li>
          <input
            className="hidden"
            onChange={handleEmojiChange}
            type="radio"
            id="test4"
            name="selectedEmoji"
            value="excited"
            checked={fields.selectedEmoji === "excited"}
          />
          <label
            className="inline-flex flex-col items-center leading-tight"
            htmlFor="test4"
          >
            <span
              className={`transform text-2xl ${
                fields.selectedEmoji === "excited"
                  ? "scale-125"
                  : "grayscale scale-95"
              }`}
              role="img"
              aria-label="LOVED it!"
            >
              🤩
            </span>
          </label>
        </li>
      </ul>
      {open && (
        <div className="flex flex-col items-end p-2 shadow-md">
          <textarea
            className="w-full h-24 overflow-y-scroll text-sm resize-none"
            name="feedback"
            value={fields.feedback}
            onChange={handleFeedbackChange}
            placeholder="What are your honest thoughts?"
          />
          <button
            className="px-2 py-1 text-xs text-white bg-black rounded"
            type="submit"
          >
            Send
          </button>
        </div>
      )}
    </form>
  );
}
