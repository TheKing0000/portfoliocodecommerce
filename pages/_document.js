import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta property="og:title" content="Im the og title" />
        <meta property="og:description" content="Im the og description" />
        <meta property="og:type" content="this is the type" />
        <meta
          property="og:url"
          content="https://flaviocopes.com/setup-github-credentials-macos/"
        />
        <meta
          property="og:image"
          content="https://flaviocopes.com/img/avatar.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
