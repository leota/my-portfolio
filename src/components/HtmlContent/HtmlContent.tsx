import { FC } from "react";
import { motion } from "framer-motion";

export const HtmlContent: FC = () => {
  return (
    <div className="w-screen">
      <motion.section
        className="absolute top-0 w-full h-screen"
      >
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
      <div className="absolute top-100-vh w-full h-screen">
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-extrabold mt-20">Languages</h1>
        </motion.div>
      </div>
      <div className="absolute top-200-vh w-full h-screen">
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-extrabold mt-20">Leonardo</h1>
        </motion.div>
      </div>
      <div className="absolute top-300-vh w-full h-screen">
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-extrabold mt-20">Leonardo</h1>
        </motion.div>
      </div>
    </div>
  );
};
