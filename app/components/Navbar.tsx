"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navLinks = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 py-4 px-12 bg-[#020c0c]">
      <div className="flex flex-wrap items-center justify-between text-white">
        <div>
          <Link href={"/"}>FumiMelvin</Link>
        </div>
        <div className="mobile block md:hidden">
          {!isOpen ? (
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white"
            >
              <Bars3Icon className="h-5 w-4" />
            </button>
          ) : (
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white"
            >
              <XMarkIcon className="h-5 w-4" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="nav">
          <ul className="flex flex-row space-x-6">
            {navLinks.map((item) => (
              <Link key={item.name} href={item.href}>
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>
      {isOpen ? (
        <ul className="flex flex-col md:hidden text-white items-center justify-center text-2xl">
          {navLinks.map((item) => (
            <Link key={item.name} href={item.href}>
              {item.name}
            </Link>
          ))}
        </ul>
      ) : null}
    </nav>
  );
}

export default Navbar;
