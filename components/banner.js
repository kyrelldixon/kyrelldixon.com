import { useState } from "react";
import Icon from "./icon";

export default function Banner({ children }) {
  const [showBanner, setShowBanner] = useState(true);
  return (
    showBanner && (
      <div className="flex items-center justify-center px-2 py-2 text-sm text-center text-white bg-black">
        <div className="flex-1">{children}</div>
        <button
          className="absolute hidden px-4 py-1 text-base opacity-50 md:inline-block right-5"
          onClick={() => setShowBanner(false)}
        >
          <Icon name="close" />
        </button>
      </div>
    )
  );
}
