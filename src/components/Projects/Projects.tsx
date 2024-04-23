import { FC } from "react";
import { Project } from "./Project";

export const Projects: FC = () => (
  <div className="relative flex flex-col w-full py-4 items-center justify-start xl:py-16 my-4">
    <h3 className="h3 text-gray-50 font-extrabold mb-8 lg:text-3xl xl:text-5xl xl:mb-32">
      Projects
    </h3>
    <div className="grid grid-cols-1 gap-4 justify-items-center items-center md:gap-16 xl:gap-32">
      <Project
        title="Polygona"
        image="/images/polygona.png"
        alt="housecure"
        url="https://polygona.io"
      />
      <Project
        title="Housecure"
        image="/images/housecure-cover.png"
        alt="housecure"
        url="https://housecure.co.uk"
        reverse
      />
      <Project
        title="Views For Change"
        image="/images/vfc.png"
        alt="housecure"
        url="https://www.facebook.com/viewsforchange"
      />
      <Project
        title="AllPlants"
        image="/images/allplants.png"
        alt="housecure"
        url="https://allplants.com"
        reverse
      />
      <Project
        title="Doctorlink"
        image="/images/doctorlink.png"
        alt="housecure"
        url="https://www.doctorlink.com"
      />
    </div>
  </div>
);
