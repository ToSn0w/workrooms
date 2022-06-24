import Layout from "../components/Layout/Layout";
import { GlobalStyles } from "../utils/GlobalStyles";
import "../styles/index.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
