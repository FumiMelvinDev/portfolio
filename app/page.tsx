import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#040F0F] mx-auto px-4 sm:px-14 py-4">
      {/* <Navbar /> */}
      <Hero />
      <AboutMe />
      <Projects />
    </main>
  );
}
