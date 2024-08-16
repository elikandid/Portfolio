import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

const App = () => {
  return (
    <main className="w-screen min-h-screen bg-white relative text-black">
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
};

export default App;
