"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

import ImageIcon from "../svg-icons/ImageIcon";
import VideoIcon from "../svg-icons/VideoIcon";
import RealtimeIcon from "../svg-icons/RealtimeIcon";
import EditIcon from "../svg-icons/EditIcon";
import LipsyncIcon from "../svg-icons/LipsyncIcon";
import MotionTransferIcon from "../svg-icons/MotionTransferIcon";
import TrainIcon from "../svg-icons/TrainIcon";
import EnhancerIcon from "../svg-icons/EnhancerIcon";

const items = [
    {
        title: "Image",
        desc: "Generate images with custom styles in plux and ideogram.",
        icon: <ImageIcon />,
        badge: "New",
        className: "img-background",
    },
    {
        title: "Video",
        desc: "Generate videos with Hallux, Pisca, Runway, Luma and more..",
        icon: <VideoIcon />,
        className: "bg-[oklch(79.55%_0.1875_75.3501)]",
    },
    {
        title: "Realtime",
        desc: "Realtime AI rendering on a canvas. Instant feedback loops.",
        icon: <RealtimeIcon />,
        className: "realTime",
    },
    {
        title: "Enhancer",
        desc: "Upscale and enhance images and videos up to 22K.",
        icon: <EnhancerIcon />,
        badge: "New",
        className: "enhancer",
    },
    {
        title: "Edit",
        desc: "Add objects, change styles or expand photos and generations.",
        icon: <EditIcon />,
        badge: "New",
        className: "edit",
    },
    {
        title: "Video Lipsync",
        desc: "Lip sync any video to any audio.",
        icon: <LipsyncIcon />,
        badge: "New",
        className: "lipsync",
    },
    {
        title: "Motion Transfer",
        desc: "Transfer motion to images and animate characters.",
        icon: <MotionTransferIcon />,
        badge: "New",
        className: "img-background",
    },
    {
        title: "Train",
        desc: "Teach WAN to replicate your style, product or character.",
        icon: <TrainIcon />,
        className: "text-gray-600 dark:text-gray-300",
    },
     {
        title: "Image",
        desc: "Generate images with custom styles in plux and ideogram.",
        icon: <ImageIcon />,
        badge: "New",
        className: "img-background",
    },
    {
        title: "Video",
        desc: "Generate videos with Hallux, Pisca, Runway, Luma and more..",
        icon: <VideoIcon />,
        className: "bg-[oklch(79.55%_0.1875_75.3501)]",
    },
    {
        title: "Realtime",
        desc: "Realtime AI rendering on a canvas. Instant feedback loops.",
        icon: <RealtimeIcon />,
        className: "realTime",
    },
    {
        title: "Enhancer",
        desc: "Upscale and enhance images and videos up to 22K.",
        icon: <EnhancerIcon />,
        badge: "New",
        className: "enhancer",
    },
    {
        title: "Edit",
        desc: "Add objects, change styles or expand photos and generations.",
        icon: <EditIcon />,
        badge: "New",
        className: "edit",
    },
    {
        title: "Video Lipsync",
        desc: "Lip sync any video to any audio.",
        icon: <LipsyncIcon />,
        badge: "New",
        className: "lipsync",
    },
];

export default function GenerateSection() {
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 800, once: false });
    }, []);

    useEffect(() => {
        AOS.refresh();
    }, [showAll]);

    const visibleItems = showAll ? items : items.slice(0, 8);

    return (
        <section className="p-5 lg:p-10 lg:py-20 bg-white dark:bg-black">
            <div className="flex items-center justify-between mb-5">
                <h4 className="text-lg font-semibold text-gray-500 dark:text-gray-200">
                    Generate
                </h4>
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition cursor-pointer"
                >
                    {showAll ? "Show less" : "Show all"}
                        <ChevronDown
                            className={`w-5 h-5 transition-transform ${
                                showAll ? "rotate-180" : ""
                            }`}
                        />
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 xl:gap-15">
                {visibleItems.map((item, idx) => (
                    <div
                        key={idx}
                        data-aos="fade-up"
                        data-aos-delay={idx * 150} 
                        className="w-full flex items-center justify-between gap-10"
                    >
                        <Link href="#" className="flex items-center gap-2">
                            <div
                                className={`icons text-white relative aspect-square rounded-[10px] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 size-10.5 shrink-0 ${item.className}`}
                            >
                                {item.icon}
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <h6 className="font-semibold">{item.title}</h6>
                                    {item.badge && (
                                        <span className="py-1 px-3 rounded-full bg-blue-500 text-white text-sm capitalize">
                                            {item.badge}
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm">{item.desc}</p>
                            </div>
                        </Link>
                        <button className="rounded-full py-2 px-7 bg-gray-200/50 dark:bg-gray-700/70 text-black dark:text-white">
                            Open
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
