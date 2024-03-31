"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 mt-12">
        <div className="col-span-7 place-self-center sm:text-center lg:text-left">
          <h1 className="text-2xl sm:text-4xl">
            Hello, I`m{" "}
            <span>
              <TypeAnimation
                sequence={["Fumi Melvin", 1200, "a Full Stack Developer", 1200]}
                wrapper="span"
                speed={50}
                repeat={2}
              />
            </span>
          </h1>
          <p>
            As a skilled full-stack web developer and proficient Flutter
            developer, my objective is to leverage my expertise in both
            front-end and back-end technologies to contribute effectively to
            innovative projects.
          </p>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full w-[275px] h-[275px] lg:w-[400px] lg:h-[400px] relative bg-slate-500">
            <Image
              src="/hero.png"
              height={300}
              width={300}
              alt="Hero Image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
