import { FC } from "react";
import NextImage from "next/image";
import Link from "next/link";

export const Image: FC<{
  alt: string;
  src: string;
}> = ({ alt, src }) => (
  <div className="relative w-full h-auto md:w-2/3 xl:w-2/3">
    <NextImage
      alt={alt}
      src={src}
      width={500}
      height={500}
      className="w-full h-auto"
      layout="responsive"
    />
  </div>
);

export const Skills: FC = () => (
  <div className="relative flex flex-col  w-full  items-center justify-start xl:py-16">
    <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-10 rounded-lg" />
    <h3 className="text-2xl text-gray-50 font-extrabold m-4 lg:text-3xl xl:text-5xl xl:mb-8">
      My Skills
    </h3>
    <div className="grid grid-cols-3 gap-4 p-4 justify-items-center items-center md:gap-8 xl:w-1/2">
      <Image alt="js" src="/images/javascript.png" />
      <Image alt="ts" src="/images/typescript.png" />
      <Image alt="reactjs" src="/images/reactjs.png" />
      <Image alt="nodejs" src="/images/nodejs.png" />
      <Image alt="python" src="/images/python.png" />
      <Image alt="sql" src="/images/sql.png" />
    </div>
    <Link href="/3d-skills">
      <button className="bg-purple-800 text-white font-bold py-2 px-4 rounded-lg mt-8 lg:text-xl xl:text-2xl hover:bg-purple-600">
        View a 3D tour of my skills
      </button>
    </Link>
  </div>
);
