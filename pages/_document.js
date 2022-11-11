import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          property="og:title"
          content="Simon Front End Developer Portfolio Page"
        />
        <meta
          property="og:description"
          content="I can build for you a modern web application using the best technology stack. I am going to use Next js with wich is Nexflix and Tiktok and other big IT companies were developed. Contact me if you are interested in a collaboration!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://portfoliocodecommerce.vercel.app/"
        />
        <meta property="og:image" content="/assets/contact.jpg" />
        {/* pwa */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo.png"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
