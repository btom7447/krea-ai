"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FluxCarousel() {
    const images = [
        "/images/opensource.webp",
        "/images/flux.webp",
        "/images/summer-sky.webp",
        "/images/seedream.webp",
        "/images/wan22.webp",
        "/images/qwen.webp",
        "/images/summer-sky.webp",
        "/images/seedream.webp",
    ];

    useEffect(() => {
        AOS.init({ duration: 800, once: false });
    }, []);

    return (
        <div className="relative w-full rounded-2xl shadow-sm">
            {/* Overlay */}
            <div className="absolute inset-0 rounded-xl bg-black/40 z-10 pointer-events-none" />

            {/* Top Label */}
            <p
                className="absolute top-5 lg:top-10 left-5 lg:left-10 text-lg text-white uppercase z-20"
                data-aos="fade-left"
                data-aos-delay="400"
            >
                Open Source Model
            </p>

            {/* Bottom Text */}
            <div className="absolute bottom-0 left-0 z-20 w-full p-5 lg:p-10 flex flex-col">
                <h5
                    className="text-xl lg:text-3xl text-white leading-loose"
                    data-aos="fade-down"
                    data-aos-delay="600"
                >
                    FLUX.1 Krea
                </h5>
                <p
                    className="hidden text-sm lg:block lg:text-md text-white max-w-xl"
                    data-aos="fade-down"
                    data-aos-delay="800"
                >
                    We're making the weights to our FLUX.1 Krea model open-source. <br />
                    Download and run our model weights, read the technical report, or
                    generate with it in Krea Image.
                </p>
            </div>
            
            {/* Custom Arrows */}
            <div className="absolute -bottom-15 right-5 lg:right-20 z-30 flex gap-3">
                <button className="custom-prev flex items-center justify-center rounded-full bg-gray-200/50 dark:bg-gray-700/70 text-black dark:text-white p-3 transition hover:border hover:border-gray-300 cursor-pointer">
                    <ChevronLeft size={20} strokeWidth={1} />
                </button>
                <button className="custom-next flex items-center justify-center rounded-full bg-gray-200/50 dark:bg-gray-700/70 text-black dark:text-white p-3 transition hover:border hover:border-gray-300 cursor-pointer">
                    <ChevronRight size={20} strokeWidth={1} />
                </button>
            </div>

            {/* Swiper Carousel */}
            <Swiper
                modules={[Autoplay, Navigation]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
                }}
                loop={true}
                className="rounded-2xl"
                onSlideChange={() => AOS.refresh()}
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="relative w-full h-[200px] xl:h-[50dvh]"
                            data-aos="zoom-in"
                            data-aos-delay="100"
                        >
                        <Image
                            src={src}
                            alt={`Slide ${index + 1}`}
                            fill
                            className="object-cover h-full w-full rounded-xl"
                        />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
