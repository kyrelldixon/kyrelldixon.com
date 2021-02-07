import { useEffect } from "react";
import Prism from "prismjs";

/**
 * Add syntax highlighting to `pre` HTML elements
 * @param data Any content that should trigger reloading the highlightin
 */
export function useSyntaxHighlighting(data: any) {
  useEffect(() => {
    Prism.highlightAll();
  }, [data]);
}
