import { onMount } from "solid-js";
import { useTranslations } from "@/i18n";

const t = useTranslations();

const SCROLL_TOP_THRESHOLD = 50;

export default function ScrollTop() {
  let scrollTopRef!: HTMLDivElement;

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  onMount(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      scrollTopRef.classList.toggle(
        "md:hidden",
        scrollY < SCROLL_TOP_THRESHOLD,
      );
      scrollTopRef.classList.toggle("md:flex", scrollY >= SCROLL_TOP_THRESHOLD);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
  });

  return (
    <div
      class="fixed bottom-8 right-8 hidden flex-col gap-3 md:hidden z-10"
      ref={scrollTopRef}
    >
      <button
        type="button"
        aria-label={t("components.scrollTop.scrollTop")}
        onClick={handleScrollToTop}
        class="rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
      >
        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
