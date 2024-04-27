import { Background } from "@/components/Background";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;700;800&display=swap"
        rel="stylesheet"
      />
      <body>
        <Background />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
