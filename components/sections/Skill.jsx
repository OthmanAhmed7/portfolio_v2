"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import SectionHeader from "../components/SectionHeader";

const Skill = () => {
  const [skillType, setSkillType] = useState("technical");

  return (
    <section id="skills" className="max-w-[1300px] mx-auto pt-[6rem]">
      <div className="flex flex-col items-center">
        <SectionHeader title="My Skills" />
      </div>

      <div className="flex flex-col items-center">
        <div className="flex gap-[2rem] mb-[5rem]">
          <button
            onClick={() => setSkillType("technical")}
            className="px-[1.8rem] py-[.7rem] text-white bg-neutral-800 rounded-[.8rem] font-[500] text-[1.1rem] hover:text-neutral-800 hover:bg-white transition duration-300 ease-in"
          >
            Technical
          </button>
          <button
            onClick={() => setSkillType("soft")}
            className="px-[1.8rem] py-[.7rem] text-white bg-neutral-800 rounded-[.8rem] font-[500] text-[1.1rem] hover:text-neutral-800 hover:bg-white transition duration-300 ease-in"
          >
            Soft
          </button>
        </div>
        {skillType === "technical" && (
          <div className="flex flex-wrap gap-[2rem] items-center justify-center">
            <div className="flex flex-col items-center gap-[.5rem] group">
              <Image
                src="/img/html-1.svg"
                width={700}
                height={700}
                alt="HTML logo"
                className="w-[80px] h-[80px] grayscale mx-[2rem] group-hover:grayscale-0 transition duration-300 ease-in-out"
              />
              <p className="text-[1.1rem] font-[600] text-neutral-800 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                HTML
              </p>
            </div>

            <div className="flex flex-col items-center gap-[.5rem] group">
              <Image
                src="/img/css-3.svg"
                width={700}
                height={700}
                alt="CSS logo"
                className="w-[80px] h-[80px] grayscale mx-[2rem] hover:grayscale-0 transition duration-300 ease-in-out"
              />
              <p className="text-[1.1rem] font-[600] text-neutral-800 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                CSS
              </p>
            </div>

            <div className="flex flex-col items-center gap-[.5rem] group">
              <Image
                src="/img/logo-javascript.svg"
                width={700}
                height={700}
                alt="JavaScript logo"
                className="w-[80px] h-[80px] grayscale mx-[2rem] hover:grayscale-0 transition duration-300 ease-in-out"
              />
              <p className="text-[1.1rem] font-[600] text-neutral-800 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                JavaScript
              </p>
            </div>

            <div className="flex flex-col items-center gap-[.5rem] group">
              <Image
                src="/img/sass-1.svg"
                width={700}
                height={700}
                alt="Sass logo"
                className="w-[80px] h-[80px] grayscale mx-[2rem] hover:grayscale-0 transition duration-300 ease-in-out"
              />
              <p className="text-[1.1rem] font-[600] text-neutral-800 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                Sass
              </p>
            </div>

            <div className="flex flex-col items-center gap-[.5rem] group">
              <Image
                src="/img/react-2.svg"
                width={700}
                height={700}
                alt="React logo"
                className="w-[80px] h-[80px] grayscale mx-[2rem] hover:grayscale-0 transition duration-300 ease-in-out"
              />
              <p className="text-[1.1rem] font-[600] text-neutral-800 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                React.js
              </p>
            </div>

            <div className="flex flex-col items-center gap-[.5rem] group">
              <Image
                src="/img/tailwind-css-2.svg"
                width={700}
                height={700}
                alt="Tailwind logo"
                className="w-[80px] h-[80px] grayscale mx-[2rem] hover:grayscale-0 transition duration-300 ease-in-out"
              />
              <p className="text-[1.1rem] font-[600] text-neutral-800 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                Tailwind
              </p>
            </div>

            <div className="flex flex-col items-center gap-[.5rem] group">
              <Image
                src="/img/typescript.svg"
                width={700}
                height={700}
                alt="TypeScript logo"
                className="w-[80px] h-[80px] grayscale mx-[2rem] hover:grayscale-0 transition duration-300 ease-in-out"
              />
              <p className="text-[1.1rem] font-[600] text-neutral-800 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                TypeScript
              </p>
            </div>

            <div className="flex flex-col items-center gap-[.5rem] group">
              <Image
                src="/img/next-js.svg"
                width={700}
                height={700}
                alt="Next.js logo"
                className="w-[80px] h-[80px] grayscale mx-[2rem] hover:grayscale-0 transition duration-300 ease-in-out"
              />
              <p className="text-[1.1rem] font-[600] text-neutral-800 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                Next.js
              </p>
            </div>

            <div className="flex flex-col items-center gap-[.5rem] group">
              <Image
                src="/img/git-icon.svg"
                width={700}
                height={700}
                alt="Git logo"
                className="w-[80px] h-[80px] grayscale mx-[2rem] hover:grayscale-0 transition duration-300 ease-in-out"
              />
              <p className="text-[1.1rem] font-[600] text-neutral-800 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                Git
              </p>
            </div>

            <div className="flex flex-col items-center gap-[.5rem] group">
              <Image
                src="/img/github-icon-1.svg"
                width={700}
                height={700}
                alt="GitHub logo"
                className="w-[80px] h-[80px] grayscale mx-[2rem] hover:grayscale-0 transition duration-300 ease-in-out"
              />
              <p className="text-[1.1rem] font-[600] text-neutral-800 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                GitHub
              </p>
            </div>

            <div className="flex flex-col items-center gap-[.5rem] group">
              <Image
                src="/img/sqlite.svg"
                width={700}
                height={700}
                alt="SQLite3 logo"
                className="w-[80px] h-[80px] grayscale mx-[2rem] hover:grayscale-0 transition duration-300 ease-in-out"
              />
              <p className="text-[1.1rem] font-[600] text-neutral-800 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                SQLite3
              </p>
            </div>

            <div className="flex flex-col items-center gap-[.5rem] group">
              <Image
                src="/img/postgresql.svg"
                width={700}
                height={700}
                alt="PostgreSQL logo"
                className="w-[80px] h-[80px] grayscale mx-[2rem] hover:grayscale-0 transition duration-300 ease-in-out"
              />
              <p className="text-[1.1rem] font-[600] text-neutral-800 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                PostgreSQL
              </p>
            </div>
          </div>
        )}

        {skillType === "soft" && (
          <div className="flex flex-col md:flex-row gap-[1.5rem] md:gap-[10rem] lg:gap-[15rem]">
            <div className="flex flex-col gap-[1.5rem]">
              <p className="flex items-center gap-[.5rem]">
                <FaCheckCircle className="text-primary-400 w-[22px] h-[22px]" />{" "}
                <span className="text-[1.2rem] font-[500]">Adaptability</span>
              </p>
              <p className="flex items-center gap-[.5rem]">
                <FaCheckCircle className="text-primary-400 w-[22px] h-[22px]" />
                <span className="text-[1.2rem] font-[500]">
                  Attention to details
                </span>
              </p>
              <p className="flex items-center gap-[.5rem]">
                <FaCheckCircle className="text-primary-400 w-[22px] h-[22px]" />
                <span className="text-[1.2rem] font-[500]">
                  Continuos learning
                </span>
              </p>
              <p className="flex items-center gap-[.5rem]">
                <FaCheckCircle className="text-primary-400 w-[22px] h-[22px]" />
                <span className="text-[1.2rem] font-[500]">
                  Critical thinking
                </span>
              </p>
              <p className="flex items-center gap-[.5rem]">
                <FaCheckCircle className="text-primary-400 w-[22px] h-[22px]" />
                <span className="text-[1.2rem] font-[500]">Negotiation</span>
              </p>
            </div>

            <div className="flex flex-col gap-[1.5rem]">
              <p className="flex items-center gap-[.5rem]">
                <FaCheckCircle className="text-primary-400 w-[22px] h-[22px]" />
                <span className="text-[1.2rem] font-[500]">
                  Problem solving
                </span>
              </p>
              <p className="flex items-center gap-[.5rem]">
                <FaCheckCircle className="text-primary-400 w-[22px] h-[22px]" />
                <span className="text-[1.2rem] font-[500]">Resilience</span>
              </p>
              <p className="flex items-center gap-[.5rem]">
                <FaCheckCircle className="text-primary-400 w-[22px] h-[22px]" />
                <span className="text-[1.2rem] font-[500]">
                  Strategic Thinking
                </span>
              </p>
              <p className="flex items-center gap-[.5rem]">
                <FaCheckCircle className="text-primary-400 w-[22px] h-[22px]" />
                <span className="text-[1.2rem] font-[500]">
                  Time management
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skill;
