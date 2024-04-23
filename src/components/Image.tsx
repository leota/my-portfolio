import { FC } from "react";
import NextImage from "next/image";

export const Image: FC<{
    alt: string;
    src: string;
    className?: string;
  }> = ({ alt, src, className }) => (
    <div className={`relative w-full h-auto ${className}`}>
      <NextImage
        alt={alt}
        src={src}
        width={500}
        height={500}
        className="w-full h-auto rounded-lg"
        layout="responsive"
      />
    </div>
  );
  