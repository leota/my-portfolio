import { FC } from 'react';

import Link from 'next/link';

export const Contacts: FC = () => (
  <Link href='mailto:leonardo.maglio.wa@gmail.com'>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-16 xl:text-2xl'>
      Contact me
    </button>
  </Link>
);
