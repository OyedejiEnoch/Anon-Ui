"use client"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import Blog from "@/sections/Blog";
import Features from "@/sections/Features";
import Figma from "@/sections/Figma";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Navbar from "@/sections/Navbar";
import Pricing from "@/sections/Pricing";
import Testimonials from "@/sections/Testimonials";
import Usage from "@/sections/Usage";
import UsageFeatures from "@/sections/UsageFeatures";
import ReactLenis from "lenis/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
export default function Home() {


  return (
    <ReactLenis root className=" min-h-screen w-screen overflow-x-auto">

    <Navbar />
      <Header />
      <Features />
      <Figma />
      <Usage />
      <UsageFeatures />
      <Testimonials />
      <Pricing />
      <Blog />
      <Footer />
   </ReactLenis>
  );
}
