import Image from "next/image";
import React from "react";
import background from "../../../public/assets/images/background-hero.png";

const Hero = () => {
  return (
    // Make the container `relative` so the absolutely positioned Image is placed
    // behind the content, and add z-index to the content so text/buttons are fully opaque.
    <div className="w-full h-screen relative flex  items-center bg-black">
      <Image
        alt="imagen fondo"
        className="absolute inset-0 w-full h-full object-cover object-center"
        src={background}
      ></Image>
      <div className="flex sm:items-start items-center justify-around flex-col h-[55%] sm:w-[45%] w-full px-12 sm:text-start text-center relative z-10">
        <h3 className="text-3xl text-[#D1A121]">Jugamos, creamos,<br/> conectamos</h3>
        <span className="text-white">
          ¡Únete a una aventura épica con La leyenda del Kitsune! Sumergete<br/> en
          un mundo fasciante creado con pasion por Abi Rached Studio.<br/> ¡Únete al
          viaje hoy mismo y experimenta la magia de nuestro próximo lanzamiento!
        </span>
        <button className="uppercase bg-[#D1A121] p-2 text-black text-xl sm:w-auto w-full font-medium rounded-md">Descarga el juego</button>
      </div>
    </div>
  );
};

export default Hero;
