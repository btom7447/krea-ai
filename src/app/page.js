"use client";

import { useEffect } from "react";
import AOS from "aos";

import CarouselSection from "@/components/sections/CarouselSections";
import GenerateSection from "@/components/sections/GenerateSection";
import GallerySection from "@/components/sections/GallerySection";

export default function Home() {

useEffect(() => {
  AOS.init({
    duration: 800, 
    easing: "ease-in-out",
    once: false,   
  });
}, []);

  return (
    <>
      <CarouselSection />
      <GenerateSection />
      <GallerySection />
    </>
  );
}
