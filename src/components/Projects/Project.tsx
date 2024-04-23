import { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Image } from "@/components/Image";

export const Project: FC<{
    title: string;
    image: string;
    alt: string;
    url: string;
    reverse?: boolean;
  }> = ({ title, image, alt, url, reverse }) => (
    <div className="w-full">
      <h4 className="block md:hidden h4 text-center text-2xl text-gray-50 font-bold m-4">
        {title}
      </h4>
      <div
        className={`flex flex-col justify-center md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="md:w-3/5 xl:w-2/5">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Image alt={alt} src={image} className="rounded-lg" />
          </motion.div>
        </div>
        <div className="md:w-2/5 flex flex-col self-center items-center">
          <h4 className="hidden md:block h4 text-center text-gray-50 font-bold m-4 text-3xl xl:text-7xl">
            {title}
          </h4>
          <Link href={url} target="_blank">
            <button className="bg-purple-600 text-white font-bold py-2 px-4 rounded-lg m-4 lg:text-xl xl:text-2xl hover:bg-purple-700">
              View website
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
  