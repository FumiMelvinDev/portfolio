import Image from "next/image";
import React from "react";

const skills = [
  {
    id: 1,
    name: "JavaScript",
    icon: "javascript",
  },
  {
    id: 2,
    name: "TypeScript",
    icon: "typescript",
  },
  {
    id: 3,
    name: "Node.js",
    icon: "nodejs",
  },
  {
    id: 4,
    name: "React.js",
    icon: "react",
  },
  {
    id: 5,
    name: "Next.js",
    icon: "nextjs",
  },
  {
    id: 6,
    name: "Express",
    icon: "express",
  },
  {
    id: 7,
    name: "Flutter",
    icon: "flutter",
  },
  {
    id: 8,
    name: "MongoDB",
    icon: "mongodb",
  },
  {
    id: 9,
    name: "PostgreSQL",
    icon: "postgresql",
  },
  {
    id: 8,
    name: "Prisma",
    icon: "prisma",
  },
];
function AboutMe() {
  return (
    <section className="text-white">
      <div className="lg:grid lg:grid-cols-2 gap-8 py-8 px-4 ">
        <div className="">
          <h2 className="text-6xl font-semibold mb-2">About Me</h2>
          <p className="text-[#e5e5e5] text-base">
            As a Full-Stack Web Developer proficient in both front-end and
            back-end development, I excel in creating user-friendly websites and
            applications, staying updated with industry trends, and leveraging
            technologies such as HTML, CSS, JavaScript, Node.js, React, Express,
            and NextJS. Additionally, I am dedicated to contributing to
            innovative projects while continuously enhancing my skills in
            software development. As a Flutter developer, my objective is to
            leverage my expertise in both front-end and back-end technologies to
            contribute effectively to innovative projects while continuously
            expanding my knowledge and enhancing my capabilities in software
            development.
          </p>
        </div>
        <div className="mt-4">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            {skills &&
              skills.map((skill) => {
                return (
                  <div
                    className="flex flex-col items-center space-y-1"
                    key={skill.id}
                  >
                    <Image
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}/${skill.icon}-original.svg`}
                      alt=""
                      width={60}
                      height={60}
                    />
                    <p>{skill.name}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
