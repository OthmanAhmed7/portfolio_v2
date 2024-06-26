import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="max-w-[1300px] mx-auto pt-[6rem]">
      <div className="flex flex-col items-center">
        <span className="relative text-[2.8rem] font-[600] mb-[5rem]">
          About Me{" "}
          <svg
            className="absolute left-[-3px] bottom-[1px] z-[20]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1418 125"
            fill="#b1d0cf"
          >
            <path d="M1412.29 72.17c-11.04-5.78-20.07-14.33-85.46-25.24-22.37-3.63-44.69-7.56-67.07-11.04-167.11-22.06-181.65-21.24-304.94-30.56C888.78 1.39 822.57 1.1 756.44 0c-46.63-.11-93.27 1.56-139.89 2.5C365.5 13.55 452.86 7.68 277.94 23.15 202.57 33.32 127.38 45.01 52.07 55.69c-11.23 2.41-22.63 4.17-33.71 7.22C6.1 66.33 5.64 66.19 3.89 67.79c-7.99 5.78-2.98 20.14 8.72 17.5 33.99-9.47 32.28-8.57 178.06-29.66 4.26 4.48 7.29 3.38 18.42 3.11 13.19-.32 26.38-.53 39.56-1.12 53.51-3.81 106.88-9.62 160.36-13.95 18.41-1.3 36.8-3.12 55.21-4.7 23.21-1.16 46.43-2.29 69.65-3.4 120.28-2.16 85.46-3.13 234.65-1.52 23.42.99 1.57-.18 125.72 6.9 96.61 8.88 200.92 27.94 295.42 46.12 40.87 7.91 116.67 23.2 156.31 36.78 3.81 1.05 8.28-.27 10.51-3.58 3.17-3.72 2.66-9.7-.78-13.13-3.25-3.12-8.14-3.44-12.18-5.08-17.89-5.85-44.19-12.09-63.67-16.56l26.16 3.28c23.02 3.13 46.28 3.92 69.34 6.75 10.8.96 25.43 1.81 34.34-4.39 2.26-1.54 4.86-2.75 6.21-5.27 2.76-4.59 1.13-11.06-3.59-13.68ZM925.4 23.77c37.64 1.4 153.99 10.85 196.64 14.94 45.95 5.51 91.89 11.03 137.76 17.19 24.25 4.77 74.13 11.21 101.72 18.14-11.87-1.15-23.77-1.97-35.65-3.06-133.46-15.9-266.8-33.02-400.47-47.21Z"></path>
          </svg>
        </span>

        <div className="flex items-start justify-center">
          <div className="flex-1">
            <Image
              src="/img/me2.png"
              width={1000}
              height={1000}
              alt="My Photo"
              className="w-[30rem] rounded-[.8rem]"
            />
          </div>

          <div className="flex-1">
            <div className="text-[1.2rem] text-neutral-400 leading-[2.5rem] mb-[2rem]">
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

            <button className="px-[1.8rem] py-[.7rem] text-white bg-neutral-800 rounded-full font-[500] text-[1.1rem]">
              <a href="/Othman_Ahmed's_Resume.pdf" download="">
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
