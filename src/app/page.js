'use client'
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/sections/Hero/Hero";
import Loader from "@/components/loader/Loader.jsx"

export default function Home() {
  return (
    <div className="">
      <Loader/>
      <Navbar />
      <Hero></Hero>
    </div>
  );
}
