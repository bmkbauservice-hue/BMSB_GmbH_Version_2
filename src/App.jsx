import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import About from "./components/About";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-sky-600 transition-colors duration-300 dark:bg-slate-950 dark:text-sky-300">
      <Header />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Projects />
        <About />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
