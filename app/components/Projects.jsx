import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  const myProjects = [
    {
      id: 1,
      title: "NextJs Ticketing App",
      description:
        "Ticketing app for managing, and tracking emplooyee issues. Using NextJs and MongoDB",
      githubLink: "https://github.com/FumiMelvinDev/ticketing-app",
      image: "/projects/1.png",
      projectUrl: "https://ticketing-app-rose.vercel.app/",
    },
    {
      id: 2,
      title: "NextJs Ecommerce App",
      description:
        "Ecommerce app.This app was created using NextJS, Swell and Clerk for the authentication.",
      githubLink: "https://github.com/FumiMelvinDev/next-ecommerce-swell",
      image: "/projects/2.png",
      projectUrl: "https://next-ecommerce-swell.vercel.app/",
    },
    {
      id: 3,
      title: "Flutter Notes App",
      description: "",
      githubLink: "https://github.com/FumiMelvinDev/notes_app",
      image: "/projects/3.png",
      projectUrl: "#",
    },
    {
      id: 4,
      title: "Flutter Currency Converter",
      description: "",
      githubLink: "https://github.com/FumiMelvinDev/flutter_currency_converter",
      image: "/projects/4.png",
      projectUrl: "#",
    },
    {
      id: 5,
      title: "Flutter Finance Tracker",
      description:
        "Flutter Finance Tracking app, used to track day by finances.",
      githubLink:
        "https://github.com/FumiMelvinDev/Flutter-expense-tracker-app",
      image: "/projects/5.png",
      projectUrl: "#",
    },
  ];
  return (
    <>
      <h2 className="text-white text-4xl sm:text-6xl pb-4">My Projects</h2>
      <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
        {myProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgURL={project.image}
            projectUrl={project.projectUrl}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </>
  );
}

export default Projects;
