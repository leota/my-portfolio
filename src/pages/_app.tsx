import '@/styles/globals.scss';
import type { AppProps } from 'next/app';

import { DefaultSeo } from 'next-seo';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          url: 'https://leonardomaglio.me',
          title: 'Leonardo Maglio - Full Stack 3D Web Developer',
          description:
            'I\'m a Full Stack 3D Web Developer with a passion for creating immersive and interactive experiences on the web.',
          images: [
            {
              url: 'https://leonardomaglio.me/images/cover.png',
              width: 800,
              height: 600,
              alt: 'Leonardo Maglio - Full Stack 3D Web Developer',
            },
          ],
          site_name: 'Leonardo Maglio',
        }}
        twitter={{
          handle: '@leonardomaglio',
          site: '@leonardomaglio',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
