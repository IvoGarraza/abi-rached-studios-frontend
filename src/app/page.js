'use client'
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/sections/Hero/Hero";
import Loader from "@/components/loader/Loader.jsx"
import Bento from "@/sections/Bento/Bento";
import Talents from "@/sections/Talents/Talents";
import Login from "@/components/Forms/LoginForm";
import Register from "@/components/Forms/RegisterForm";
import Apply from "@/components/Forms/ApplyForm";
import Contact from "@/sections/Contact/Contact";

export default function Home() {
  return (
    <div className="">
      <Loader/>
      <Navbar />
      <Hero></Hero>
      <Bento></Bento>
      <Talents></Talents>
      <Login></Login>
      <Register></Register>
      <Apply></Apply>
      <Contact></Contact>
    </div>
  );
}
