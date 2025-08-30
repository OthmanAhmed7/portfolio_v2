"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 mx-auto mt-[2rem] flex justify-center z-[100]">
        <nav className="hidden md:block">
          <ul className="flex gap-[2rem] font-[500] shadow-lg px-[1.8rem] py-[.7rem] bg-white/40 backdrop-blur-sm w-fit rounded-full border outline-none">
            <li className="transition duration-300 ease-in text-neutral-400 hover:text-neutral-800">
              <Link href="#">Home</Link>
            </li>
            <li className="transition duration-300 ease-in text-neutral-400 hover:text-neutral-800">
              <Link href="#about">About</Link>
            </li>
            <li className="transition duration-300 ease-in text-neutral-400 hover:text-neutral-800">
              <Link href="#skills">Skills</Link>
            </li>
            <li className="transition duration-300 ease-in text-neutral-400 hover:text-neutral-800">
              <Link href="#qualification">Experience</Link>
            </li>
            <li className="transition duration-300 ease-in text-neutral-400 hover:text-neutral-800">
              <Link href="#work">Work</Link>
            </li>
            <li className="transition duration-300 ease-in text-neutral-400 hover:text-neutral-800">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* ----------------
      ---- SMALL NAV ---------
      --------------------- */}

        <nav className="relative md:hidden">
          <div className="rounded-full shadow-xl w-[45px] h-[45px] flex items-center justify-center border overflow-hidden">
            <FiMenu
              onClick={() => {
                setToggle(!toggle);
              }}
              className="w-full h-full mx-auto full bg-white/40 backdrop-blur-sm p-[.3rem]"
            />
          </div>

          {toggle && (
            <>
              <ul className="flex flex-col items-center gap-[2rem] absolute font-[500] top-[5rem] transform translate-x-[-43%] shadow-lg px-[5rem] py-[1.5rem] bg-white/40 backdrop-blur-sm w-fit rounded-[.8rem] border outline-none">
                <li
                  onClick={() => {
                    setToggle(false);
                  }}
                  className="transition duration-300 ease-in text-neutral-400 hover:text-neutral-800"
                >
                  <Link href="#">Home</Link>
                </li>
                <li
                  onClick={() => {
                    setToggle(false);
                  }}
                  className="transition duration-300 ease-in text-neutral-400 hover:text-neutral-800"
                >
                  <Link href="#about">About</Link>
                </li>
                <li
                  onClick={() => {
                    setToggle(false);
                  }}
                  className="transition duration-300 ease-in text-neutral-400 hover:text-neutral-800"
                >
                  <Link href="#skills">Skills</Link>
                </li>
                <li
                  onClick={() => {
                    setToggle(false);
                  }}
                  className="transition duration-300 ease-in text-neutral-400 hover:text-neutral-800"
                >
                  <Link href="#qualification">Qualification</Link>
                </li>
                <li
                  onClick={() => {
                    setToggle(false);
                  }}
                  className="transition duration-300 ease-in text-neutral-400 hover:text-neutral-800"
                >
                  <Link href="#work">Work</Link>
                </li>
                <li
                  onClick={() => {
                    setToggle(false);
                  }}
                  className="transition duration-300 ease-in text-neutral-400 hover:text-neutral-800"
                >
                  <Link href="#contact">Contact</Link>
                </li>
              </ul>
            </>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
