"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // Import Splide styles
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function WannCarousel() {
    const images = [
        "/images/wan22.webp",
        "/images/qwen.webp",
        "/images/summer-sky.webp",
        "/images/seedream.webp",
        "/images/wan22.webp",
        "/images/qwen.webp",
        "/images/summer-sky.webp",
        "/images/seedream.webp",
    ];

    useEffect(() => {
        AOS.init({ duration: 800, once: false }); // initialize AOS
    }, []);

    return (
        <div className="relative w-full rounded-2xl shadow-sm">
            <div className="absolute inset-0 bg-black/40 z-10 rounded-xl pointer-events-none" />
            <p className="absolute top-5 lg:top-10 left-5 lg:left-10 text-lg text-white uppercase z-20"
                data-aos="fade-right"
                data-aos-delay="400"
            >
                New Image Model
            </p>
            <div className="p-5 lg:p-10 absolute bottom-0 left-0 z-20 w-full flex gap-10 justify-between items-end">
                <div>
                    <h5 className=" text-xl lg:text-3xl leading-loose text-white z-20"
                        data-aos="fade-up"
                        data-aos-delay="600"
                    >
                        WAN 2.2 Image generation
                    </h5>
                    <p className="hidden text-sm lg:block lg:text-md text-white max-w-xl"
                        data-aos="fade-up"
                        data-aos-delay="800"
                    >
                        Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra realistic textures.
                    </p>
                </div>
                <button 
                    className="text-sm font-semibold bg-white text-black min-w-35 rounded-full py-3 px-7"
                    data-aos="fade-up"
                    data-aos-delay="800"    
                >
                    Try WAN 2.2
                </button>
            </div>

            {/* Splide Carousel */}
            <Splide
                options={{
                    perPage: 1,
                    gap: "0px", 
                    pagination: true,
                    arrows: false, 
                    rewind: true,
                    autoplay: true,      
                    interval: 4000,     
                    pauseOnHover: true, 
                    pauseOnFocus: true, 
                }}
                aria-label="Generation Carousel"
                onMove={() => {
                    AOS.refresh();
                }}
                className="custom-splide"
            >
                {images.map((src, index) => (
                    <SplideSlide key={index}>
                        <div
                            className="relative h-[200px] xl:h-[50dvh] w-full" 
                            data-aos="zoom-in"
                            data-aos-delay="100"
                        >
                            <Image
                                fill
                                src={src}
                                alt={`Slide ${index + 1}`}
                                className="h-full w-full object-cover rounded-xl"
                            />
                        </div>
                    </SplideSlide>
                ))}
            </Splide>

        </div>
    );
}