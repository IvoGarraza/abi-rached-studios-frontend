'use client'
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/sections/Hero/Hero";
import Loader from "@/components/loader/Loader.jsx"
import Bento from "@/sections/Bento/Bento";
import Talents from "@/sections/Talents/Talents";

export default function Home() {
  return (
    <div className="">
      <Loader/>
      <Navbar />
      <Hero></Hero>
      <Bento></Bento>
      <Talents></Talents>
    </div>
  );
}
