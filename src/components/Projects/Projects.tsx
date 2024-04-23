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
  <div className="relative w-full">
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

export const Projects: FC = () => (
  <div className="relative flex flex-col w-full py-4 items-center justify-start xl:py-16 my-4">
    <h3 className="h3 text-gray-50 font-extrabold mb-8 lg:text-3xl xl:text-5xl xl:mb-32">
      Projects
    </h3>
    <div className="grid grid-cols-1 gap-4 justify-items-center items-center md:gap-16 xl:gap-32">
      <Project
        title="Housecure"
        image="/images/housecure-cover.png"
        alt="housecure"
        url="https://housecure.co.uk"
      />
      <Project
        title="Views For Change"
        image="/images/vfc.png"
        alt="housecure"
        url="https://www.facebook.com/viewsforchange"
        reverse
      />
      <Project
        title="AllPlants"
        image="/images/allplants.png"
        alt="housecure"
        url="https://allplants.com"
      />
      <Project
        title="Doctorlink"
        image="/images/doctorlink.png"
        alt="housecure"
        url="https://www.doctorlink.com"
        reverse
      />
    </div>
  </div>
);
