import React from "react";
import Image from "next/image";
import { HiMiniSignal } from "react-icons/hi2";
import { LuGithub } from "react-icons/lu";
import Link from "next/link";
import SectionHeader from "../components/SectionHeader";

const Work = () => {
  return (
    <section id="work" className="max-w-[1300px] mx-auto pt-[6rem] px-[1rem]">
      <div className="flex flex-col items-center">
        <SectionHeader title="My Work" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-[2rem] lg:gap-[4rem] mt-[4rem]">
        <div className="rounded-[.8rem] shadow-xl">
          <div className="w-full h-[18rem] overflow-hidden relative">
            <Image
              src="/img/hero.jpg"
              width={1000}
              height={1000}
              alt="Photo of the hero section"
              className="rounded-tr-[.8rem] rounded-tl-[.8rem] h-full"
            />

            <div className="absolute top-[1rem] left-1rem z-30 w-full h-full">
              <button className="absolute bg-white/40 backdrop-blur-sm left-[1rem] w-[31px] h-[31px] cursor-pointer rounded-full">
                <Link href="/">
                  <HiMiniSignal className="w-[30px] h-[30px] p-[.3rem]" />
                </Link>
              </button>

              <button className="absolute bg-white/40 backdrop-blur-sm w-[31px] left-[3.5rem] h-[31px] cursor-pointer rounded-full">
                <Link
                  href="https://github.com/OthmanAhmed7/portfolio_v2"
                  target="_blank"
                >
                  <LuGithub className="w-[30px] h-[30px] p-[.3rem]" />
                </Link>
              </button>
            </div>
          </div>

          <div className="p-[1.5rem]">
            <h3 className="text-[1.2rem] font-[600] mb-[.6rem]">ETA Group</h3>

            <div className="flex flex-wrap items-center gap-[1rem] mb-[1rem]">
              <p className="bg-neutral-800 px-[.8rem] py-[.2rem] rounded-full text-white text-[13px] font-[500]">
                Next.js
              </p>
              <p className="bg-neutral-800 px-[.8rem] py-[.2rem] rounded-full text-white text-[13px] font-[500]">
                React
              </p>
              <p className="bg-neutral-800 px-[.8rem] py-[.2rem] rounded-full text-white text-[13px] font-[500]">
                Tailwind
              </p>
            </div>

            <p className="text-neutral-400">
              This is ETA group for interior design, Furniture, and Decor web
              app. <br />
              Seamless Design with blazing fast performance, this app reach the
              score of 92% in performance.
            </p>
          </div>
        </div>

        <div className="rounded-[.8rem] shadow-xl">
          <div className="w-full h-[18rem] overflow-hidden relative">
            <Image
              src="/img/furniture.jpg"
              width={700}
              height={700}
              alt="Photo of the hero section"
              className="rounded-tr-[.8rem] rounded-tl-[.8rem]"
            />

            <div className="absolute top-[1rem] left-1rem z-30 w-full h-full">
              <button className="absolute bg-white/40 backdrop-blur-sm left-[1rem] w-[31px] h-[31px] cursor-pointer rounded-full">
                <Link
                  href="https://furniture-lilac-eight.vercel.app/"
                  target="_blank"
                >
                  <HiMiniSignal className="w-[30px] h-[30px] p-[.3rem]" />
                </Link>
              </button>

              <button className="absolute bg-white/40 backdrop-blur-sm w-[31px] left-[3.5rem] h-[31px] cursor-pointer rounded-full">
                <Link
                  href="https://github.com/OthmanAhmed7/Furniture"
                  target="_blank"
                >
                  <LuGithub className="w-[30px] h-[30px] p-[.3rem]" />
                </Link>
              </button>
            </div>
          </div>

          <div className="p-[1.5rem]">
            <h3 className="text-[1.2rem] font-[600] mb-[.6rem]">Furniture</h3>

            <div className="flex flex-wrap items-center gap-[1rem] mb-[1rem]">
              <p className="bg-neutral-800 px-[.8rem] py-[.2rem] rounded-full text-white text-[13px] font-[500]">
                Next.js
              </p>
              <p className="bg-neutral-800 px-[.8rem] py-[.2rem] rounded-full text-white text-[13px] font-[500]">
                Sanity
              </p>
              <p className="bg-neutral-800 px-[.8rem] py-[.2rem] rounded-full text-white text-[13px] font-[500]">
                React
              </p>
              <p className="bg-neutral-800 px-[.8rem] py-[.2rem] rounded-full text-white text-[13px] font-[500]">
                Tailwind
              </p>
            </div>

            <p className="text-neutral-400">
              A multipage E-Commerce furniture store with various features like
              a search bar, sort options, add to cart, remove from cart, add
              quantity, or decrease it inside the cart, blog page, and more.
            </p>
          </div>
        </div>

        <div className="rounded-[.8rem] shadow-xl">
          <div className="w-full h-[18rem] overflow-hidden relative">
            <Image
              src="/img/logo.jpg"
              width={700}
              height={700}
              alt="Photo of the hero section"
              className="rounded-tr-[.8rem] rounded-tl-[.8rem] h-full bg-[#00040f]"
            />

            <div className="absolute top-[1rem] left-1rem z-30 w-full h-full">
              <button className="absolute bg-white/40 backdrop-blur-sm left-[1rem] w-[31px] h-[31px] cursor-pointer rounded-full">
                <Link href="https://digimosh.vercel.app/" target="_blank">
                  <HiMiniSignal className="w-[30px] h-[30px] p-[.3rem]" />
                </Link>
              </button>

              <button className="absolute bg-white/40 backdrop-blur-sm w-[31px] left-[3.5rem] h-[31px] cursor-pointer rounded-full">
                <Link
                  href="https://github.com/OthmanAhmed7/digimosh"
                  target="_blank"
                >
                  <LuGithub className="w-[30px] h-[30px] p-[.3rem]" />
                </Link>
              </button>
            </div>
          </div>

          <div className="p-[1.5rem]">
            <h3 className="text-[1.2rem] font-[600] mb-[.6rem]">Hoo Bank</h3>

            <div className="flex flex-wrap items-center gap-[1rem] mb-[1rem]">
              <p className="bg-neutral-800 px-[.8rem] py-[.2rem] rounded-full text-white text-[13px] font-[500]">
                Next.js
              </p>
              <p className="bg-neutral-800 px-[.8rem] py-[.2rem] rounded-full text-white text-[13px] font-[500]">
                React
              </p>
              <p className="bg-neutral-800 px-[.8rem] py-[.2rem] rounded-full text-white text-[13px] font-[500]">
                Tailwind
              </p>
            </div>

            <p className="text-neutral-400">
              A form for official governments documents & contracts in Saudi
              Arabia. <br />
              The user user fill the form and and will be able to download the
              PDF document with his data.
            </p>
          </div>
        </div>

        <div className="rounded-[.8rem] shadow-xl">
          <div className="w-full h-[18rem] overflow-hidden relative">
            <Image
              src="/img/maids.jpg"
              width={700}
              height={700}
              alt="Photo of the hero section"
              className="rounded-tr-[.8rem] rounded-tl-[.8rem] h-full gradient__bg"
            />

            <div className="absolute top-[1rem] left-1rem z-30 w-full h-full">
              <button className="absolute bg-white/40 backdrop-blur-sm left-[1rem] w-[31px] h-[31px] cursor-pointer rounded-full">
                <Link href="https://maids-xi.vercel.app/" target="_blank">
                  <HiMiniSignal className="w-[30px] h-[30px] p-[.3rem]" />
                </Link>
              </button>

              <button className="absolute bg-white/40 backdrop-blur-sm w-[31px] left-[3.5rem] h-[31px] cursor-pointer rounded-full">
                <Link
                  href="https://github.com/OthmanAhmed7/maids"
                  target="_blank"
                >
                  <LuGithub className="w-[30px] h-[30px] p-[.3rem]" />
                </Link>
              </button>
            </div>
          </div>

          <div className="p-[1.5rem]">
            <h3 className="text-[1.2rem] font-[600] mb-[.6rem]">GPT-3</h3>

            <div className="flex flex-wrap items-center gap-[1rem] mb-[1rem]">
              <p className="bg-neutral-800 px-[.8rem] py-[.2rem] rounded-full text-white text-[13px] font-[500]">
                Next.js
              </p>
              <p className="bg-neutral-800 px-[.8rem] py-[.2rem] rounded-full text-white text-[13px] font-[500]">
                React
              </p>
              <p className="bg-neutral-800 px-[.8rem] py-[.2rem] rounded-full text-white text-[13px] font-[500]">
                Tailwind
              </p>
            </div>

            <p className="text-neutral-400">
              A web app for home cleaning service. <br />
              Responsive design, pixel-perfect, and bug-free code. This web app
              got a 98% in performance.
            </p>
          </div>
        </div>

        <div className="rounded-[.8rem] shadow-xl">
          <div className="w-full h-[18rem] overflow-hidden relative">
            <Image
              src="/img/anime_lib.jpg"
              width={1000}
              height={1000}
              alt="Photo of the hero section"
              className="rounded-tr-[.8rem] rounded-tl-[.8rem] bg-neutral-800 h-full"
            />

            <div className="absolute top-[1rem] left-1rem z-30 w-full h-full">
              <button className="absolute bg-white/40 backdrop-blur-sm left-[1rem] w-[31px] h-[31px] cursor-pointer rounded-full">
                <Link
                  href="https://anime-library-ten.vercel.app/"
                  target="_blank"
                >
                  <HiMiniSignal className="w-[30px] h-[30px] p-[.3rem]" />
                </Link>
              </button>

              <button className="absolute bg-white/40 backdrop-blur-sm w-[31px] left-[3.5rem] h-[31px] cursor-pointer rounded-full">
                <Link
                  href="https://github.com/OthmanAhmed7/anime_library"
                  target="_blank"
                >
                  <LuGithub className="w-[30px] h-[30px] p-[.3rem]" />
                </Link>
              </button>
            </div>
          </div>

          <div className="p-[1.5rem]">
            <h3 className="text-[1.2rem] font-[600] mb-[.6rem]">
              Anime Library
            </h3>

            <div className="flex flex-wrap items-center gap-[1rem] mb-[1rem]">
              <p className="bg-neutral-800 px-[.8rem] py-[.2rem] rounded-full text-white text-[13px] font-[500]">
                Next.js
              </p>
              <p className="bg-neutral-800 px-[.8rem] py-[.2rem] rounded-full text-white text-[13px] font-[500]">
                React
              </p>
              <p className="bg-neutral-800 px-[.8rem] py-[.2rem] rounded-full text-white text-[13px] font-[500]">
                Tailwind
              </p>
            </div>

            <p className="text-neutral-400">
              A web app for all anime lovers to discover the huge world of
              anime. This app has login and register with hashed password for
              authentication.
            </p>
          </div>
        </div>

        <div className="rounded-[.8rem] shadow-xl">
          <div className="w-full h-[18rem] overflow-hidden relative">
            <Image
              src="/img/sushi-1.png"
              width={700}
              height={700}
              alt="Photo of the hero section"
              className="rounded-tr-[.8rem] rounded-tl-[.8rem] bg-[#b1454a] h-full"
            />

            <div className="absolute top-[1rem] left-1rem z-30 w-full h-full">
              <button className="absolute bg-white/40 backdrop-blur-sm left-[1rem] w-[31px] h-[31px] cursor-pointer rounded-full">
                <Link href="https://sushiman-livid.vercel.app/" target="_blank">
                  <HiMiniSignal className="w-[30px] h-[30px] p-[.3rem]" />
                </Link>
              </button>

              <button className="absolute bg-white/40 backdrop-blur-sm w-[31px] left-[3.5rem] h-[31px] cursor-pointer rounded-full">
                <Link
                  href="https://github.com/OthmanAhmed7/sushiman"
                  target="_blank"
                >
                  <LuGithub className="w-[30px] h-[30px] p-[.3rem]" />
                </Link>
              </button>
            </div>
          </div>

          <div className="p-[1.5rem]">
            <h3 className="text-[1.2rem] font-[600] mb-[.6rem]">SushiMan</h3>

            <div className="flex flex-wrap items-center gap-[1rem] mb-[1rem]">
              <p className="bg-neutral-800 px-[.8rem] py-[.2rem] rounded-full text-white text-[13px] font-[500]">
                HTML
              </p>
              <p className="bg-neutral-800 px-[.8rem] py-[.2rem] rounded-full text-white text-[13px] font-[500]">
                CSS
              </p>
              <p className="bg-neutral-800 px-[.8rem] py-[.2rem] rounded-full text-white text-[13px] font-[500]">
                JavaScript
              </p>
            </div>

            <p className="text-neutral-400">
              A restaurant that specializes in sushi and all things around it.
              Sushi man Is one of my favorite projects for what ever reason I
              just love to look at it. This a very good UI using Vanilla
              JavaScript, HTML, and Vanilla CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
