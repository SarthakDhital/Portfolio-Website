"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-400">
          Sarthak Dhital
        </Link>

        {/* Desktop Navigation */}
        {!menuOpen && (
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="#about" className="hover:text-blue-400">
              About
            </Link>
            <Link href="#projects" className="hover:text-blue-400">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-blue-400">
              Contact
            </Link>
          </nav>
        )}

        {/* Toggle Button (Always Visible) */}
        <button
          className="text-2xl md:text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="bg-gray-800 px-6 pb-4 flex flex-col items-center">
          <Link
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="block py-2 hover:text-blue-400"
          >
            About
          </Link>
          <Link
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="block py-2 hover:text-blue-400"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block py-2 hover:text-blue-400"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
