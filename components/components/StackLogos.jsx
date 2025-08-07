import Image from "next/image";
import React from "react";

const StackLogos = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={700}
      height={700}
      className="w-[60px] h-[60px] grayscale mx-[2rem] hover:grayscale-0 transition duration-300 ease-in-out"
    />
  );
};

export default StackLogos;
