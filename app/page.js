import About from "@/components/sections/About";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import InfiniteMarquee from "@/components/sections/InfiniteMarquee";
import Skill from "@/components/sections/Skill";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <InfiniteMarquee />
      <About />
      <Skill />
    </div>
  );
}
