import Link from "next/link";
import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";

function ProjectCard({ imgURL, title, description, githubLink, projectUrl }) {
  return (
    <div>
      <div
        className="h-52 md:h-72"
        style={{
          background: `url(${imgURL})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="text-white rounded-b-xl bg-[#071616] p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-slate-300 text-sm my-1">{description}</p>
        <div className="flex space-x-4 text-xl">
          <Link href={githubLink}>
            <FaGithub />
          </Link>
          <Link href={projectUrl}>
            <FaGlobe />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
