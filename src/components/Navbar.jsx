import { useState } from "react";
import Logo from "../../public/header/LOGO.svg";
import Menu from "../../public/header/menu.svg";
import { TfiAlignJustify, TfiClose } from "react-icons/tfi";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="container mx-auto px-7 bg-green-black fixed -top-2 w-screen z-30">
        <div className="w-full h-20 flex items-center justify-between">
          <img
            src={Logo}
            alt="logo com as iniciais do meu nome (O M )"
            className="w-32"
          />
          <div onClick={() => setOpen(!open)}>
            {open ? (
              <TfiClose className="text-green-blue text-4xl" />
            ) : (
              <img src={Menu} className="text-green-blue text-4xl" />
            )}
          </div>
        </div>
      </div>
      <div>
        {open && (
          <nav className="w-full h-auto flex  items-end flex-col bg-green-black fixed top-[70px] rounded-bl-3xl z-30">
            <li className="list-none">
              <a
                href="#inicio"
                className="text-white font-bold text-xl hover:text-green-blue-hover px-6"
              >
                INICIO
              </a>
            </li>
            <li className="list-none flex text-start">
              <a
                href="#"
                className="text-white font-bold text-xl hover:text-green-blue-hover px-6"
              >
                SOBRE
              </a>
            </li>
            <li className="list-none">
              <a
                href="#"
                className="text-white font-bold text-xl hover:text-green-blue-hover px-6"
              >
                PROJETOS
              </a>
            </li>
            <li className="list-none">
              <a
                href="#"
                className="text-white font-bold text-xl hover:text-green-blue-hover px-6"
              >
                EXPERIENCIAS
              </a>
            </li>

          </nav>
        )}
      </div>
    </div>
  );
}

export default Navbar;
