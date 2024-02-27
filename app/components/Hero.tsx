"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 mt-20">
        <div className="col-span-7 place-self-center text-center lg:text-left">
          <h1>
            Hello, I`m{" "}
            <span>
              <TypeAnimation
                sequence={["Fumi Melvin", 1200, "a Full Stack Developer", 1200]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            dignissimos praesentium nesciunt ab ut officiis velit laboriosam
            dolores, iste voluptates, est.
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
