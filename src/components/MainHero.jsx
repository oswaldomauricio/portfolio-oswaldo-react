import Navbar from "./Navbar";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import React from 'react';
import Typewriter from "typewriter-effect";

function MainHero() {
  return (
    <main id="#inicio" className="bg-green-main">
      <div className="m-8 pt-40 flex items-center flex-col">
        <span className="text-white text-xl font-semibold">Olá, eu sou o</span>
        <h1
          id="typewriter"
          className="text-green-blue text-3xl font-bold pt-1 flex"
        >
          <Typewriter
            options={{
              strings: ['Oswaldo Mauricio'],
              autoStart: true,
              loop: true,
              delay: 100,
            }}
          />
        </h1>

        <p className="text-white text-lg pt-8 pb-16 font-medium items-center">
          DESENVOLVEDOR FRONT-END
        </p>
        <div className="text-white flex items-center gap-6">
          <a href="https://github.com/oswaldomauricio" target="_blank">
            <button className="flex items-center gap-2 border-2 border-green-button py-3 px-5 rounded-lg hover:border-white shadow-lg hover:shadow-cyan-500/50">
              GitHub <FaGithub />
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/oswaldo-mauricio/"
            target="_blank"
          >
            <button className="flex items-center gap-2 border-2 border-green-button py-3 px-5 rounded-lg hover:border-white shadow-lg hover:shadow-cyan-500/50">
              LinkedIn <FaLinkedin />
            </button>
          </a>
        </div>
      </div>
      <div className="my-32 w-full h-20 bg-green-black"></div>
    </main>
  );
}
export default MainHero;
