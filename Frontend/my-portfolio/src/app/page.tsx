import React from "react";
import Header from "./components/header";

const HomePage = () => {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            👋 Hi, I'm <span className="text-blue-500">Sarthak Dhital</span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 mb-6">
            I'm a Full Stack Developer building modern, fast, and responsive web
            apps.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-white hover:bg-white hover:text-black px-6 py-2 rounded-full transition"
            >
              Contact Me
            </a>
          </div>
        </section>

        <footer className="absolute bottom-4 text-gray-500 text-sm">
          © {new Date().getFullYear()} Sarthak Dhital. All rights reserved.
        </footer>
      </main>
    </>
  );
};

export default HomePage;
