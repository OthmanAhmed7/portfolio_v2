import React from "react";
import Image from "next/image";

const Logo = ({ src, alt }) => {
  return (
    <section>
      <Image
        src={src}
        width={700}
        height={700}
        alt={alt}
        className="w-[60px] h-[60px] grayscale mx-[2rem] hover:grayscale-0 transition duration-300 ease-in-out"
      />
    </section>
  );
};

export default Logo;
