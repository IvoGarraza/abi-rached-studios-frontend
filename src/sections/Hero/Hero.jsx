import Image from "next/image";
import React from "react";
import background from "../../../public/assets/images/background-hero.png";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <Image
        alt="imagen fondo"
        className="h-full w-auto absolute object-cover object-center"
        src={background}
      ></Image>
      <div className="flex items-center justify-center flex-col h-full px-4 text-center">
        <h3 className="text-2xl text-[#D1A121]">Juega, creamos, conectamos</h3>
        <span>
          ¡Únete a una aventura épica con La leyenda del Kitsune! Sumergete en
          un mundo fasciante creado con pasion por Abi Rached Studio. ¡Únete al
          viaje hoy mismo y experimenta la magia de nuestro próximo lanzamiento!
        </span>
        <button className="uppercase bg-[#D1A121] w-full rounded-md">Descarga el juego</button>
      </div>
    </div>
  );
};

export default Hero;
