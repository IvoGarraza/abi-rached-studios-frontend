import React from "react";
import { motion } from "framer-motion";
import logo from "../../../public/assets/images/logo-black.png";
import Image from "next/image";

const Loader = () => {
  return (
    <div className="w-full fixed z-[1000] flex flex-row h-screen">
      <motion.div
        initial={{ height: "100%" }}
        animate={{ height: "0%" }}
        className="h-full w-1/5 bg-[#D1A121]"
      ></motion.div>
      <motion.div
        initial={{ height: "100%" }}
        animate={{ height: "0%" }}
        transition={{delay:0.2}}
        className="h-full w-1/5 bg-[#D1A121]"
      ></motion.div>
      <motion.div
        initial={{ height: "100%" }}
        animate={{ height: "0%" }}
                transition={{delay:0.4}}
        className="h-full w-1/5 bg-[#D1A121] flex items-center justify-center"
      >
        <motion.div 
        initial={{opacity:1}}
        animate={{opacity:0}}
        transition={{delay:0.4}}
        className="w-full flex items-center justify-center "
        >
            <Image src={logo} className="w-1/2 animate-pulse"></Image>
        </motion.div>

      </motion.div>
      <motion.div
        initial={{ height: "100%" }}
        animate={{ height: "0%" }}
                transition={{delay:0.6}}
        className="h-full w-1/5 bg-[#D1A121]"
      ></motion.div>
      <motion.div
        initial={{ height: "100%" }}
        animate={{ height: "0%" }}
                transition={{delay:0.8}}
        className="h-full w-1/5 bg-[#D1A121]"
      ></motion.div>
    </div>
  );
};

export default Loader;
