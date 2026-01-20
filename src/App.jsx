import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

import { Header } from "./components/Header";
import { Hero } from "../src/sections/hero/Hero";
import { About } from "../src/sections/about/About";
import { Projects } from "../src/sections/projects/Projects";
import { Contact } from "../src/sections/contact/Contact";
import { Footer } from "./components/Footer";

function App() {
  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      effects: true,
    });

    return () => {
      smoother.kill();
    };
  }, []);
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content" className="overflow-x-hidden">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
