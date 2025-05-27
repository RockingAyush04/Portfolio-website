import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full bg-white">
      {/* NAVBAR CONTENT */}
      <div className="w-full flex justify-between items-center px-8 py-3">
        <a href="#" className="flex items-center font-semibold text-black gap-4">
          <div className="bg-black text-white w-16 h-16 flex items-center justify-center rounded-full text-2xl">
            AP
          </div>
          <div className="font-bold text-2xl">Portfolio Website</div>
        </a>
        <nav className="relative">
          <ul
            className={`md:flex gap-6 font-medium text-lg ${
              menuOpen
                ? "flex flex-col absolute right-0 top-12 bg-white rounded shadow p-4"
                : "hidden md:flex"
            }`}
            id="menu"
          >
            <li>
              <a href="#" className="hover:bg-gray-100 rounded px-4 py-2 block">
                Home
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:bg-gray-100 rounded px-4 py-2 block">
                About Me
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:bg-gray-100 rounded px-4 py-2 block">
                Projects
              </a>
            </li>
            <li>
              <a href="#certifications" className="hover:bg-gray-100 rounded px-4 py-2 block">
                Certifications
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:bg-gray-100 rounded px-4 py-2 block">
                Contact Me
              </a>
            </li>
          </ul>
          <button
            className="md:hidden ml-4"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle Mobile Menu"
          >
            <svg className="w-7 h-7 text-black" viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
        </nav>
      </div>
      {/* FULL-WIDTH LINE */}
      <hr className="w-full border-t-2 border-gray-400" />
    </header>
  );
}