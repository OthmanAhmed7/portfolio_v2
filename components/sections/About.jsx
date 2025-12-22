import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../components/SectionHeader";

const About = () => {
  return (
    <section id="about" className="max-w-[1300px] mx-auto pt-[6rem]">
      <div className="flex flex-col items-center">
        <SectionHeader title="About Me" />

        <div className="flex flex-col lg:flex-row px-[1rem] items-center lg:items-start justify-center">
          <div className="flex-1 mb-[1rem] md:mb-[1.5rem] lg:mb-0">
            <Image
              src="/img/me2.png"
              width={1000}
              height={1000}
              alt="My Photo"
              className="w-[100vw] lg:w-[30rem] rounded-[.8rem]"
            />
          </div>

          <div className="flex-1">
            <div className="text-[1.2rem] text-neutral-400 leading-[2rem] lg:leading-[2.5rem] mb-[1rem] md:mb-[1.5rem] lg:mb-[2rem]">
              <p>
                As a frontend developer, my passion for crafting immersive
                digital experiences drives me in every project I undertake. What
                began as a hobby soon became an all-consuming passion, as I
                realized the transformative power of frontend technologies in
                bringing ideas to life on the web.
              </p>
              <p>
                For me, frontend development is not just about writing code,
                it’s about creating meaningful connections between users and
                technology.
              </p>
            </div>

            <button className="px-[1.8rem] py-[.7rem] text-white bg-neutral-800 rounded-full font-[500] text-[1.1rem] hover:text-neutral-800 hover:bg-white transition duration-300 ease-in">
              <a href="/Othman Ahmed Frontend.pdf" download="">
                {" "}
                Download <strong>CV</strong>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
