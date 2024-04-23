import { FC } from "react";
import Link from "next/link";
import { Image } from "@/components/Image";

export const Skills: FC = () => (
  <div className="relative flex flex-col w-screen py-4 items-center justify-start xl:py-16 my-4">
    {/* <div className="absolute top-0 left-0 w-full h-full bg-blue-400 bg-opacity-20 rounded-lg" /> */}
    <h3 className="h3 text-gray-50 font-extrabold m-4 lg:text-3xl xl:text-5xl xl:mb-8">
      My Skills
    </h3>
    <div className="grid grid-cols-3 gap-4 p-4 justify-items-center items-center md:gap-8 xl:w-1/2">
      <Image
        alt="js"
        src="/images/javascript.png"
        className="md:w-2/3 xl:w-2/3"
      />
      <Image
        alt="ts"
        src="/images/typescript.png"
        className="md:w-2/3 xl:w-2/3"
      />
      <Image
        alt="reactjs"
        src="/images/reactjs.png"
        className="md:w-2/3 xl:w-2/3"
      />
      <Image
        alt="nodejs"
        src="/images/nodejs.png"
        className="md:w-2/3 xl:w-2/3"
      />
      <Image
        alt="python"
        src="/images/python.png"
        className="md:w-2/3 xl:w-2/3"
      />
      <Image alt="sql" src="/images/sql.png" className="md:w-2/3 xl:w-2/3" />
    </div>
    <Link href="/3d-skills">
      <button className="bg-purple-600 text-white font-bold py-2 px-4 rounded-lg mt-8 lg:text-xl xl:text-2xl hover:bg-purple-700">
        View a 3D tour of my skills
      </button>
    </Link>
  </div>
);
