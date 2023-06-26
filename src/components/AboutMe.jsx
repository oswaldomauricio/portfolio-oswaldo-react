import imgAboutMe from "../../public/img2-aboutMe.png";
import curriculo from "../../public/curriculo - oswaldo.pdf";
import { useState } from "react";
import { FaDownload, FaEnvelope } from "react-icons/fa";

function AboutMe() {
  return (
    <div id="sobre" className="container mx-auto px-7 h-screen">
      <div className="flex flex-col items-center">
        <h2 className="font-semibold text-2xl leading-10 text-green-blue pt-10 pb-2">
          SOBRE MIM
        </h2>
        <div className="flex transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-100 items-start">
          <div className="w-1 h-48 bg-green-blue"></div>
          <img
            src={imgAboutMe}
            alt="Foto sobre mim"
            className="w-48 h-48 z-0"
          />
        </div>

        <h3 className="font-semibold text-lg leading-10 text-white pt-2 pb-6">
          Manaus, Amazonas
        </h3>
        <p className="font-medium text-lg text-gray-text text-center leading-9 w-full h-full pb-10">
          Olá! Sou auxiliar administrativo e atualmente estou em transição de
          carreira com dedicação nos estudos para futuramente ser uma
          desenvolvedor Front-End. Em jul/2022 tomei a decisão de estudar por
          conta própria fazendo diversos cursos. Estou cursando Sistema da
          informação na Fametro e continuo meus estudos, tendo em mente que
          estamos sempre em constante aprendizado.
        </p>

        <div className="text-white flex items-center gap-6 h-full pb-8">
          <a href={curriculo} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2 border-2 border-green-button py-3 px-5 rounded-lg hover:border-white shadow-lg hover:shadow-cyan-500/50">
              Curriculo <FaDownload />
            </button>
          </a>
          <a
            href="mailto:oswaldomauricio6@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center gap-2 border-2 border-green-button py-3 px-5 rounded-lg hover:border-white shadow-lg hover:shadow-cyan-500/50">
              E-mail <FaEnvelope />
            </button>
          </a>
        </div>
      </div>
      
    </div>
  );
}

export default AboutMe;
