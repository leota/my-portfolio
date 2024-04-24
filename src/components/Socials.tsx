import { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { Image } from "@/components/Image";

export const Socials: FC = () => (
  <div className="relative flex flex-col py-4 items-center jus xl:py-16 my-4">
    <h3 className="h3 text-gray-50 font-extrabold m-4 lg:text-3xl xl:text-5xl xl:mb-8">
      More about me on
    </h3>
    <div className="flex gap-8 xl:max-w-2xl">
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link
          href="https://www.linkedin.com/in/leonardo-maglio-02a79131"
          target="_blank"
          className="flex justify-center"
        >
          <Image
            alt="linkedin"
            src="/images/linkedin.png"
          />
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link href="https://github.com/leota" target="_blank" className="flex justify-center">
          <Image
            alt="github"
            src="/images/github.png"
          />
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link href="https://vimeo.com/leota" target="_blank" className="flex justify-center">
          <Image
            alt="vimeo"
            src="/images/vimeo.png"
          />
        </Link>
      </motion.div>
    </div>
  </div>
);
