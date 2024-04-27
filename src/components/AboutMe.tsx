import { FC } from 'react';

import { motion } from 'framer-motion';

import { Image } from '@/components/Image';

export const AboutMe: FC = () => (
  <div className='w-full'>
    <h4 className='block xl:hidden h4 text-center text-2xl md:text-3xl text-gray-50 font-bold m-4'>
      About me
    </h4>
    <div className='flex flex-col justify-center items-center xl:flex-row'>
      <div className='w-2/5 xl:w-2/5'>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Image
            alt='profile'
            src='/images/leonardo.png'
            className='rounded-lg xl:w-2/3'
          />
        </motion.div>
      </div>
      <div className='xl:w-2/5 flex flex-col self-center items-center'>
        <h4 className='hidden xl:block h4 text-center text-gray-50 font-bold m-4 text-3xl xl:text-7xl'>
          About me
        </h4>
        <p className='m-4 text-md  md:text-2xl text-purple-900 bg-white bg-opacity-60 rounded-lg p-8 '>
          I&apos;m a Full Stack Web Developer with a special passion for 3D - 
          hence my extensive background in the VFX industry. With 10+
          years of experience in the field, I specialize in creating scalable,
          responsive, and performant web applications with delightful user
          experiences. My tech stack includes JavaScript, TypeScript, React,
          Next.js, Three.js, GraphQL, Node.js, Python, and SQL.
        </p>
      </div>
    </div>
  </div>
);
