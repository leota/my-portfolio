import { motion } from "framer-motion";
import { FC } from "react";
import { Hero3D } from "./Hero3D/Hero3d";

export const Hero: FC = () => (
  <div className="w-screen">
    <motion.section className="w-full h-screen flex flex-col items-center xl:flex-row">
      <div className="flex flex-col items-center md:h-1/3 w-full mt-16 md:justify-center md:mt-0 xl:w-1/2 xl:items-start">
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
          <h1 className="h1 text-dark-grey text-2xl md:text-5xl xl:text-7xl xl:mb-8">
            I&apos;m <span className="text-purple-800">Leonardo Maglio</span>
          </h1>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
          <h2 className="h2 text-gray-600 text-xl md:text-5xl xl:text-5xl">
            Full Stack Web Developer
          </h2>
        </motion.div>
      </div>
      <div className="h-2/5 my-8 md:h-2/5 md:w-2/3 lg:h-2/3 xl:w-1/2">
        <Hero3D />
      </div>
    </motion.section>
  </div>
);
