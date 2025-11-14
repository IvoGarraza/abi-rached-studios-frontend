import Image from "next/image";
import React from "react";
import background from "../../../public/assets/images/background-hero.png";

const Hero = () => {
  return (
    // Make the container `relative` so the absolutely positioned Image is placed
    // behind the content, and add z-index to the content so text/buttons are fully opaque.
    <div className="w-full h-screen relative">
      <Image
        alt="imagen fondo"
        className="absolute inset-0 w-full h-full object-cover object-center"
        src={background}
      ></Image>
      <div className="flex items-center justify-center flex-col h-full px-4 text-center relative z-10">
        <h3 className="text-2xl text-[#D1A121]">Juega, creamos, conectamos</h3>
        <span>
          ¡Únete a una aventura épica con La leyenda del Kitsune! Sumergete en
          un mundo fasciante creado con pasion por Abi Rached Studio. ¡Únete al
          viaje hoy mismo y experimenta la magia de nuestro próximo lanzamiento!
        </span>
        <button className="uppercase bg-[#D1A121] text-white w-full rounded-md">Descarga el juego</button>
      </div>
    </div>
  );
};

export default Hero;
