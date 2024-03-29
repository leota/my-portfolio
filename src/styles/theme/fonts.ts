import { Figtree as FontBody, Prompt as FontHeading } from 'next/font/google';

import type { DeepPartial, Theme } from '@chakra-ui/react';

const fontHeading = FontHeading({
  weight: '800',
  subsets: ['latin'],
  variable: '--font-heading',
  preload: true,
});

const fontBody = FontBody({
  subsets: ['latin'],
  variable: '--font-body',
});

export const fonts: DeepPartial<Theme['fonts']> = {
  heading: fontHeading.style.fontFamily,
  body: fontBody.style.fontFamily,
};
