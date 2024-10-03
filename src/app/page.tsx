import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white poppins">
      <div className="w-full md:w-2/3 p-4 min-h-screen flex flex-col">
        <Navbar />
        <main className="container">
          <Hero />
          <Stack />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}