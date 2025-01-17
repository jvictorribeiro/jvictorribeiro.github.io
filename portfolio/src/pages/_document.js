import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/perfil2.jpg" sizes="any" />   
      </Head> 
      <body className="antialiased" data-theme="light">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
