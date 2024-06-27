import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 mx-auto mt-[2rem] flex justify-center z-[100]">
      <nav>
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
            <Link href="#qualification">Qualification</Link>
          </li>
          <li className="transition duration-300 ease-in text-neutral-400 hover:text-neutral-800">
            <Link href="#work">Work</Link>
          </li>
          <li className="transition duration-300 ease-in text-neutral-400 hover:text-neutral-800">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
