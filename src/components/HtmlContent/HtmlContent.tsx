import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HtmlContent: FC = () => {
  return (
    <div className="w-screen">
      <motion.section className="absolute top-0 w-full h-screen">
        <div className="flex flex-col items-center md:items-start h-screen w-full mt-16 md:justify-center md:mt-0 md:mx-4 lg:mx-8">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="h1 text-dark-grey text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
              Full Stack
            </h1>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="h1 text-navy-blue md:text-6xl lg:text-7xl xl:text-8xl">
              Web Developer
            </h1>
          </motion.div>
        </div>
      </motion.section>
      <div className="absolute top-100-vh w-full h-screen flex justify-center lg:justify-start lg:mx-4 lg:mx-8">
        <div className="flex flex-col items-center justify-start lg:items-start lg:justify-center">
          <h1 className="text-4xl font-extrabold m-0 ">Languages</h1>
          <div className="flex items-center my-8">
            <Image
              alt="js"
              src="/images/javascript.png"
              width={96}
              height={96}
              className="mr-4"
            />
            <Image
              alt="ts"
              src="/images/typescript.png"
              width={96}
              height={96}
              className="mr-4"
            />
            <Image
              alt="python"
              src="/images/python.png"
              width={96}
              height={96}
            />
          </div>
        </div>
        <div className="absolute bottom-8">
          <Link href="https://github.com/leota/my-3d-resume" target="_blank">
            <div className="flex items-center">
              <Image
                alt="github"
                src="/images/github.png"
                width={36}
                height={36}
                className="mr-2"
              />
              <p className="text-blue-700 underline"
              >View on GitHub</p>
            </div>
          </Link>
        </div>
      </div>
      {/* <div className="absolute top-200-vh w-full h-screen">
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-extrabold mt-20">Leonardo</h1>
        </motion.div>
      </div>
      <div className="absolute top-300-vh w-full h-screen">
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-extrabold mt-20">Leonardo</h1>
        </motion.div>
      </div> */}
    </div>
  );
};
