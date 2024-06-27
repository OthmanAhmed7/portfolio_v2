import React from "react";
import Image from "next/image";
import { HiMiniSignal } from "react-icons/hi2";
import { LuGithub } from "react-icons/lu";
import Link from "next/link";

const Work = () => {
  return (
    <section id="work" className="max-w-[1300px] mx-auto pt-[6rem]">
      <div className="flex flex-col items-center">
        <span className="relative text-[2.8rem] font-[600] mb-[2rem]">
          My Work{" "}
          <svg
            className="absolute left-[-3px] bottom-[1px] z-[20]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1418 125"
            fill="#b1d0cf"
          >
            <path d="M1412.29 72.17c-11.04-5.78-20.07-14.33-85.46-25.24-22.37-3.63-44.69-7.56-67.07-11.04-167.11-22.06-181.65-21.24-304.94-30.56C888.78 1.39 822.57 1.1 756.44 0c-46.63-.11-93.27 1.56-139.89 2.5C365.5 13.55 452.86 7.68 277.94 23.15 202.57 33.32 127.38 45.01 52.07 55.69c-11.23 2.41-22.63 4.17-33.71 7.22C6.1 66.33 5.64 66.19 3.89 67.79c-7.99 5.78-2.98 20.14 8.72 17.5 33.99-9.47 32.28-8.57 178.06-29.66 4.26 4.48 7.29 3.38 18.42 3.11 13.19-.32 26.38-.53 39.56-1.12 53.51-3.81 106.88-9.62 160.36-13.95 18.41-1.3 36.8-3.12 55.21-4.7 23.21-1.16 46.43-2.29 69.65-3.4 120.28-2.16 85.46-3.13 234.65-1.52 23.42.99 1.57-.18 125.72 6.9 96.61 8.88 200.92 27.94 295.42 46.12 40.87 7.91 116.67 23.2 156.31 36.78 3.81 1.05 8.28-.27 10.51-3.58 3.17-3.72 2.66-9.7-.78-13.13-3.25-3.12-8.14-3.44-12.18-5.08-17.89-5.85-44.19-12.09-63.67-16.56l26.16 3.28c23.02 3.13 46.28 3.92 69.34 6.75 10.8.96 25.43 1.81 34.34-4.39 2.26-1.54 4.86-2.75 6.21-5.27 2.76-4.59 1.13-11.06-3.59-13.68ZM925.4 23.77c37.64 1.4 153.99 10.85 196.64 14.94 45.95 5.51 91.89 11.03 137.76 17.19 24.25 4.77 74.13 11.21 101.72 18.14-11.87-1.15-23.77-1.97-35.65-3.06-133.46-15.9-266.8-33.02-400.47-47.21Z"></path>
          </svg>
        </span>
      </div>

      <div className="grid grid-cols-3 gap-[4rem] mt-[4rem]">
        <div className="rounded-[.8rem] shadow-xl">
          <div className="w-full h-[18rem] overflow-hidden relative">
            <Image
              src="/img/portfolio-page.png"
              width={700}
              height={700}
              alt="Photo of the hero section"
              className="rounded-tr-[.8rem] rounded-tl-[.8rem]"
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
            <h3 className="text-[1.2rem] font-[600] mb-[.6rem]">
              My Portfolio
            </h3>

            <div className="flex items-center gap-[1rem] mb-[1rem]">
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
              This is my portfolio app showcasing my favorite projects, my work
              process, Qualification, the technologies that I&rsquo;m using, and
              more to get to know me.
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

            <div className="flex items-center gap-[1rem] mb-[1rem]">
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
              src="/img/logo.svg"
              width={700}
              height={700}
              alt="Photo of the hero section"
              className="rounded-tr-[.8rem] rounded-tl-[.8rem] h-full bg-[#00040f]"
            />

            <div className="absolute top-[1rem] left-1rem z-30 w-full h-full">
              <button className="absolute bg-white/40 backdrop-blur-sm left-[1rem] w-[31px] h-[31px] cursor-pointer rounded-full">
                <Link
                  href="https://hoobank-one-sigma.vercel.app/"
                  target="_blank"
                >
                  <HiMiniSignal className="w-[30px] h-[30px] p-[.3rem]" />
                </Link>
              </button>

              <button className="absolute bg-white/40 backdrop-blur-sm w-[31px] left-[3.5rem] h-[31px] cursor-pointer rounded-full">
                <Link
                  href="https://github.com/OthmanAhmed7/hoobank"
                  target="_blank"
                >
                  <LuGithub className="w-[30px] h-[30px] p-[.3rem]" />
                </Link>
              </button>
            </div>
          </div>

          <div className="p-[1.5rem]">
            <h3 className="text-[1.2rem] font-[600] mb-[.6rem]">Hoo Bank</h3>

            <div className="flex items-center gap-[1rem] mb-[1rem]">
              <p className="bg-neutral-800 px-[.8rem] py-[.2rem] rounded-full text-white text-[13px] font-[500]">
                React
              </p>
              <p className="bg-neutral-800 px-[.8rem] py-[.2rem] rounded-full text-white text-[13px] font-[500]">
                Tailwind
              </p>
            </div>

            <p className="text-neutral-400">
              A full Responsive web app. Hoo Bank is my Implementation for a
              bank website , it has a seamless and simple designs and a some
              fine touches to complete the over all look of the website.
            </p>
          </div>
        </div>

        <div className="rounded-[.8rem] shadow-xl">
          <div className="w-full h-[18rem] overflow-hidden relative">
            <Image
              src="/img/ai.png"
              width={700}
              height={700}
              alt="Photo of the hero section"
              className="rounded-tr-[.8rem] rounded-tl-[.8rem] h-full gradient__bg"
            />

            <div className="absolute top-[1rem] left-1rem z-30 w-full h-full">
              <button className="absolute bg-white/40 backdrop-blur-sm left-[1rem] w-[31px] h-[31px] cursor-pointer rounded-full">
                <Link href="https://gpt3-six-sigma.vercel.app/" target="_blank">
                  <HiMiniSignal className="w-[30px] h-[30px] p-[.3rem]" />
                </Link>
              </button>

              <button className="absolute bg-white/40 backdrop-blur-sm w-[31px] left-[3.5rem] h-[31px] cursor-pointer rounded-full">
                <Link
                  href="https://github.com/OthmanAhmed7/gpt3"
                  target="_blank"
                >
                  <LuGithub className="w-[30px] h-[30px] p-[.3rem]" />
                </Link>
              </button>
            </div>
          </div>

          <div className="p-[1.5rem]">
            <h3 className="text-[1.2rem] font-[600] mb-[.6rem]">GPT-3</h3>

            <div className="flex items-center gap-[1rem] mb-[1rem]">
              <p className="bg-neutral-800 px-[.8rem] py-[.2rem] rounded-full text-white text-[13px] font-[500]">
                React
              </p>
              <p className="bg-neutral-800 px-[.8rem] py-[.2rem] rounded-full text-white text-[13px] font-[500]">
                CSS
              </p>
            </div>

            <p className="text-neutral-400">
              This is my Implementation for an AI website. This futuristic
              looking website has been done using React.js And vanilla CSS.
              Beautifully designed to give the user a nice UI/Ux experience.
            </p>
          </div>
        </div>

        <div className="rounded-[.8rem] shadow-xl">
          <div className="w-full h-[18rem] overflow-hidden relative">
            <Image
              src="/img/gericht.png"
              width={1000}
              height={1000}
              alt="Photo of the hero section"
              className="rounded-tr-[.8rem] rounded-tl-[.8rem] bg-neutral-800 h-full"
            />

            <div className="absolute top-[1rem] left-1rem z-30 w-full h-full">
              <button className="absolute bg-white/40 backdrop-blur-sm left-[1rem] w-[31px] h-[31px] cursor-pointer rounded-full">
                <Link
                  href="https://gericht-restaurant-ten-pearl.vercel.app/"
                  target="_blank"
                >
                  <HiMiniSignal className="w-[30px] h-[30px] p-[.3rem]" />
                </Link>
              </button>

              <button className="absolute bg-white/40 backdrop-blur-sm w-[31px] left-[3.5rem] h-[31px] cursor-pointer rounded-full">
                <Link
                  href="https://github.com/OthmanAhmed7/Gericht-Restaurant"
                  target="_blank"
                >
                  <LuGithub className="w-[30px] h-[30px] p-[.3rem]" />
                </Link>
              </button>
            </div>
          </div>

          <div className="p-[1.5rem]">
            <h3 className="text-[1.2rem] font-[600] mb-[.6rem]">
              Gericht Restaurant
            </h3>

            <div className="flex items-center gap-[1rem] mb-[1rem]">
              <p className="bg-neutral-800 px-[.8rem] py-[.2rem] rounded-full text-white text-[13px] font-[500]">
                React
              </p>
              <p className="bg-neutral-800 px-[.8rem] py-[.2rem] rounded-full text-white text-[13px] font-[500]">
                CSS
              </p>
            </div>

            <p className="text-neutral-400">
              Gericht Restaurant is a fully resbonsive web app for a restaurant
              that specializes in the finest food with a lot of awards and
              recognition for it&rsquo;s top-notch chief.
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

            <div className="flex items-center gap-[1rem] mb-[1rem]">
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
