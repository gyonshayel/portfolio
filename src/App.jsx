import { Header } from "./components/Header";
import { Hero } from "../src/sections/hero/Hero";
import { About } from "../src/sections/about/About";
import { Projects } from "../src/sections/projects/Projects";
import { Contact } from "../src/sections/contact/Contact";
import { Footer } from "./components/Footer";
import { BackgroundGradientAnimation } from "./components/ui/shadcn-io/background-gradient-animation";

function App() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Projects />
        <Contact />
        {/* <BackgroundGradientAnimation
          gradientBackgroundStart=""
          gradientBackgroundEnd=""
          firstColor="255, 255, 255"
          secondColor="220, 240, 224"
          thirdColor="128, 204, 153"
          fourthColor="35, 162, 98"
          fifthColor="8, 94, 45"
          pointerColor="255, 255, 255"
          blendingValue="multiply"
          interactive={false}
          size="100%"
          containerClassName="fixed top-0 left-0 w-screen h-screen -z-10"
        ></BackgroundGradientAnimation> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
