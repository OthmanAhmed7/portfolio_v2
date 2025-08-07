import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import Qualification from "@/components/Qualification";
import Skill from "@/components/Skill";
import Work from "@/components/Work";

export default function Home() {
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
