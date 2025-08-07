import React from "react";
import Marquee from "react-fast-marquee";
import StackLogos from "../components/StackLogos";

const InfiniteMarquee = () => {
  return (
    <section className="max-w-[1300px] mx-auto">
      <Marquee autoFill>
        <StackLogos src={"/img/html-1.svg"} alt={"HTML Logo"} />
        <StackLogos src={"/img/css-3.svg"} alt={"CSS Logo"} />
        <StackLogos src={"/img/logo-javascript.svg"} alt={"JavaScript Logo"} />
        <StackLogos src={"/img/sass-1.svg"} alt={"Sass Logo"} />
        <StackLogos src={"/img/react-2.svg"} alt={"React Logo"} />
        <StackLogos src={"/img/tailwind-css-2.svg"} alt={"Tailwind Logo"} />
        <StackLogos src={"/img/typescript.svg"} alt={"TypeScript Logo"} />
        <StackLogos src={"/img/next-js.svg"} alt={"Next.js Logo"} />
        <StackLogos src={"/img/git-icon.svg"} alt={"Git Logo"} />
        <StackLogos src={"/img/github-icon-1.svg"} alt={"GitHub Logo"} />
        <StackLogos src={"/img/sqlite.svg"} alt={"SQLite3 Logo"} />
        <StackLogos src={"/img/postgresql.svg"} alt={"PostgreSQL Logo"} />
      </Marquee>
    </section>
  );
};

export default InfiniteMarquee;
