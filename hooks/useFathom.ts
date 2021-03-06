import { useEffect } from "react";
import * as Fathom from "fathom-client";
import { useRouter } from "next/router";

/**
 * Adds tracking with Fathom Analytics.
 */
export function useFathom() {
  const router = useRouter();
  useEffect(() => {
    // Initialize Fathom when the app loads
    Fathom.load(process.env.FATHOM_SITE_ID);

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, []);
}
