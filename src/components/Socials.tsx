import { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { Image } from "@/components/Image";

export const Socials: FC = () => (
  <div className="relative flex flex-col w-screen py-4 items-center justify-start xl:py-16 my-4">
    <h3 className="h3 text-gray-50 font-extrabold m-4 lg:text-3xl xl:text-5xl xl:mb-8">
      More about me on
    </h3>
    <div className="grid grid-cols-3 gap-4 p-4 justify-items-center items-center md:gap-8 xl:w-1/2">
      <Link
        href="https://www.linkedin.com/in/leonardo-maglio-02a79131"
        target="_blank"
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Image
            alt="linkedin"
            src="/images/linkedin.png"
            className="md:w-2/3 xl:w-2/3"
          />
        </motion.div>
      </Link>
      <Link href="https://github.com/leota" target="_blank">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Image
            alt="github"
            src="/images/github.png"
            className="md:w-2/3 xl:w-2/3"
          />
        </motion.div>
      </Link>
      <Link href="https://vimeo.com/leota" target="_blank">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Image
            alt="vimeo"
            src="/images/vimeo.png"
            className="md:w-2/3 xl:w-2/3"
          />
        </motion.div>
      </Link>
    </div>
  </div>
);
