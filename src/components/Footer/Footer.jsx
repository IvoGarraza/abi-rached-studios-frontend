import logo from "../../../public/images/logo.webp";
import Image from "next/image";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="w-full h-[502px] bg-gris flex flex-row">
      <div className="w-1/4 flex flex-col items-center justify-center h-full">
        <Image src={logo} alt="logo-footer"></Image>
        <div className="flex flex-row w-1/2 items-center justify-around">
          <a href="" className="bg-oro rounded-md p-1">
            <IoLogoLinkedin size={24}></IoLogoLinkedin>
          </a>
          <a href="" className="bg-oro rounded-md p-1">
            <IoLogoInstagram size={24}></IoLogoInstagram>
          </a>
          <a href="" className="bg-oro rounded-md p-1">
            <IoLogoFacebook size={24}></IoLogoFacebook>
          </a>
        </div>
      </div>
      <div className="w-3/4 h-full flex flex-row items-center justify-around">
        <div className="flex flex-col text-white">
          <h4 className="uppercase text-oro font-bold">navegacion</h4>
          <a>Inicio</a>
          <a>Juegos</a>
          <a>Blog</a>
          <a>Contacto</a>
        </div>
        <div className="flex flex-col text-white">
          <h4 className="uppercase text-oro font-bold">institucional</h4>
          <a>Av. Alicia Moreau de Justo 350 </a>
          <a></a>
          <a>(+54) 11-1234-5678</a>
          <a>abiracherstudios@gmail.com</a>
        </div>
        <div className="flex flex-col text-white">
          <h4 className="uppercase text-oro font-bold">
            politicas de privacidad y de uso
          </h4>
          <a>Politicas de privacidad</a>
          <a>Terminos de uso</a>
          <a>Legales</a>
          <a>Afiliados</a>
          <a>Inversiones</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
