import { DefaultSeo } from "next-seo";
import Head from "next/head";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultSeo
        title="Become Growth | Learn How To Transition From Developer to Growth Engineer"
        description={`
          Welcome to Become Growth, The first online resource to help developers transition into Growth Engineers 
          made by fellow Growth Engineer Kameron Tanseli.`.trim()}
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://becomegrowth.com/",
          site_name: "Become Growth",
          images: [
            {
              url: "https://becomegrowth.com/meta.png",
              width: 454,
              height: 248,
              alt: "test tube",
            },
          ],
        }}
        twitter={{
          handle: "@KameronTanseli",
          site: "@KameronTanseli",
          cardType: "summary_large_image",
        }}
      />
      <div key={global.location ? global.location.pathname : "/"} className="container">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp
