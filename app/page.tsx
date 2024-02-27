import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#040F0F] container mx-auto px-10 py-4">
      <Navbar />
      <Hero />
    </main>
  );
}
