"use client";

import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import InfiniteMarquee from "@/components/sections/InfiniteMarquee";
import Qualification from "@/components/sections/Qualification";
import Skill from "@/components/sections/Skill";
import Work from "@/components/sections/Work";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <InfiniteMarquee />
      <About />
      <Skill />
      <Qualification />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
