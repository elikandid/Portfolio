import About from "./components/About";

import Hero from "./components/Hero";
import Projects from "./components/Projects";

const App = () => {
  return (
    <main className="w-screen  bg-white relative text-black mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Hero />
        <div id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <About />
          <Projects />
        </div>
      </div>
    </main>
  );
};

export default App;
