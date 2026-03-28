import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Revyola — Payment Intelligence</title>
        <meta name="description" content="Premium signal intelligence for healthcare payments" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
