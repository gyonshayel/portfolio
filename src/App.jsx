import { Header } from "./components/Header";
import { Hero } from "../src/sections/hero/Hero";
import { About } from "../src/sections/about/About";
import { Projects } from "../src/sections/projects/Projects";
import { Contact } from "../src/sections/contact/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
