'use client'
import React from "react";
import { motion } from "framer-motion";

const LinesTalents = ({ estilos }) => {
  return (
    <div>
      <svg
        viewBox="0 0 519 336"
        fill="none"
        className={`${estilos}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
        initial={{pathLength:0}}
        animate={{pathLength:100}}
        transition={{duration:1}}
          d="M519 312C519 298.745 508.255 288 495 288H0V336H495C508.255 336 519 325.255 519 312Z"
          fill="url(#paint0_linear_679_1376)"
        />
        <path
          d="M0 192H395C408.255 192 419 202.745 419 216C419 229.255 408.255 240 395 240H0V192Z"
          fill="url(#paint1_linear_679_1376)"
        />
        <path
          d="M0 96H295C308.255 96 319 106.745 319 120C319 133.255 308.255 144 295 144H0V96Z"
          fill="url(#paint2_linear_679_1376)"
        />
        <path
          d="M0 0H195C208.255 0 219 10.7452 219 24C219 37.2548 208.255 48 195 48H0V0Z"
          fill="url(#paint3_linear_679_1376)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_679_1376"
            x1="0"
            y1="312"
            x2="519"
            y2="312"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9747FF" stopOpacity="0.5" />
            <stop offset="1" stopColor="#9747FF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_679_1376"
            x1="419"
            y1="216"
            x2="0"
            y2="216"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3D9D9B" />
            <stop offset="1" stopColor="#3D9D9B" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_679_1376"
            x1="319"
            y1="120"
            x2="0"
            y2="120"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E67E22" />
            <stop offset="1" stopColor="#E67E22" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_679_1376"
            x1="219"
            y1="24"
            x2="0"
            y2="24"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D1A121" />
            <stop offset="1" stopColor="#D1A121" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default LinesTalents;
