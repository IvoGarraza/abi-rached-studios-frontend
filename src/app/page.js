'use client'
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/sections/Hero/Hero";
import Loader from "@/components/loader/Loader.jsx"
import Bento from "@/sections/Bento/Bento";
import Talents from "@/sections/Talents/Talents";
import Contact from "@/sections/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="">
      <Loader/>
      <Navbar />
      <Hero></Hero>
      <Bento></Bento>
      <Talents></Talents>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
