import { FC, ReactNode } from 'react';

import Link from 'next/link';

import { motion } from 'framer-motion';

import { Image } from '@/components/Image';

export const Project: FC<{
  title: string;
  description: string;
  image: string;
  alt: string;
  url: string;
  badges?: ReactNode | ReactNode[];
  reverse?: boolean;
}> = ({ title, description, image, alt, url, badges, reverse }) => (
  <div className='w-full'>
    <h4 className='block lg:hidden h4 text-center text-2xl text-gray-50 font-bold m-4'>
      {title}
    </h4>
    <div
      className={`flex flex-col justify-center lg:flex-row ${
        reverse ? 'lg:flex-row-reverse' : ''
      }`}
    >
      <div className='lg:w-3/5 xl:w-2/5'>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Image alt={alt} src={image} className='rounded-lg' />
        </motion.div>
      </div>
      <div className='flex flex-col self-center items-center lg:w-2/5 lg:mx-4'>
        <h4 className='hidden lg:block h4 text-center text-gray-50 font-bold m-4 text-3xl xl:text-7xl'>
          {title}
        </h4>
        <div className='my-4 xl:max-w-lg'>
          {badges}
        </div>
        <p className='text-gray-50 text-left mt-2 xl:max-w-lg'>{description}</p>
        <Link href={url} target='_blank'>
          <button className='bg-purple-600 text-white font-bold py-2 px-4 rounded-lg m-4 lg:text-xl xl:text-2xl xl:m-8 hover:bg-purple-700'>
            View website
          </button>
        </Link>
      </div>
    </div>
  </div>
);
