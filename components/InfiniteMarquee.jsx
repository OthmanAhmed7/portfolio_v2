import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { Logo } from "./Logo"; // Assuming Logo is a component that renders an image

const InfiniteMarquee = () => {
  return (
    <section className="max-w-[1300px] mx-auto">
      <Marquee autoFill>
        <Logo src="/img/html-1.svg" alt="HTML logo" />
        <Image
          src="/img/html-1.svg"
          width={700}
          height={700}
          alt="HTML logo"
          className="w-[60px] h-[60px] grayscale mx-[2rem] hover:grayscale-0 transition duration-300 ease-in-out"
        />
        <Image
          src="/img/css-3.svg"
          width={700}
          height={700}
          alt="CSS logo"
          className="w-[60px] h-[60px] grayscale mx-[2rem] hover:grayscale-0"
        />
        <Image
          src="/img/logo-javascript.svg"
          width={700}
          height={700}
          alt="JavaScript logo"
          className="w-[60px] h-[60px] grayscale mx-[2rem] hover:grayscale-0"
        />
        <Image
          src="/img/sass-1.svg"
          width={700}
          height={700}
          alt="Sass logo"
          className="w-[60px] h-[60px] grayscale mx-[2rem] hover:grayscale-0"
        />
        <Image
          src="/img/react-2.svg"
          width={700}
          height={700}
          alt="React logo"
          className="w-[60px] h-[60px] grayscale mx-[2rem] hover:grayscale-0"
        />
        <Image
          src="/img/tailwind-css-2.svg"
          width={700}
          height={700}
          alt="Tailwind logo"
          className="w-[60px] h-[60px] grayscale mx-[2rem] hover:grayscale-0"
        />
        <Image
          src="/img/typescript.svg"
          width={700}
          height={700}
          alt="TypeScript logo"
          className="w-[60px] h-[60px] grayscale mx-[2rem] hover:grayscale-0"
        />
        <Image
          src="/img/next-js.svg"
          width={700}
          height={700}
          alt="Next.js logo"
          className="w-[60px] h-[60px] grayscale mx-[2rem] hover:grayscale-0"
        />
        <Image
          src="/img/git-icon.svg"
          width={700}
          height={700}
          alt="Git logo"
          className="w-[60px] h-[60px] grayscale mx-[2rem] hover:grayscale-0"
        />
        <Image
          src="/img/github-icon-1.svg"
          width={700}
          height={700}
          alt="GitHub logo"
          className="w-[60px] h-[60px] grayscale mx-[2rem] hover:grayscale-0"
        />
        <Image
          src="/img/sqlite.svg"
          width={700}
          height={700}
          alt="SQLite3 logo"
          className="w-[60px] h-[60px] grayscale mx-[2rem] hover:grayscale-0"
        />
        <Image
          src="/img/postgresql.svg"
          width={700}
          height={700}
          alt="PostgreSQL logo"
          className="w-[60px] h-[60px] grayscale mx-[2rem] hover:grayscale-0"
        />
      </Marquee>
    </section>
  );
};

export default InfiniteMarquee;
