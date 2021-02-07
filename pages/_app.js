import "styles/index.css";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { useFathom } from "hooks/useFathom";

function MyApp({ Component, pageProps }) {
  useFathom();
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
