import Link from "next/link";
import Image from "next/image";
import SettingsIcon from "../svg-icons/SettingsIcon";
import UpgradeIcon from "../svg-icons/UpgradeIcon"
import ImageIcon from "../svg-icons/ImageIcon"
import VideoIcon from "../svg-icons/VideoIcon"
import RealtimeIcon from "../svg-icons/RealtimeIcon"
import EditIcon from "../svg-icons/EditIcon"
import LipsyncIcon from "../svg-icons/LipsyncIcon"
import MotionTransferIcon from "../svg-icons/MotionTransferIcon"
import TrainIcon from "../svg-icons/TrainIcon";
import EnhancerIcon from "../svg-icons/EnhancerIcon";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function GenerateSection() {
    const [showAll, setShowAll] = useState(false)
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
                <div className="w-full flex items-center justify-between gap-10">
                    <Link href="#" className="flex items-center gap-2">
                        <div className="icons img-background text-white relative aspect-square rounded-[10px] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 size-10.5 shrink-0">
                            <ImageIcon />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h6 className="font-semibold">Image</h6>
                                <span className="py-1 px-3 rounded-full bg-blue-500 text-white text-sm capitalize">New</span>
                            </div>
                            <p className="text-sm">Generate images with custom styles in plux and ideogram.</p>
                        </div>
                    </Link>
                    <button className="rounded-full py-2 px-7 bg-gray-200/50 dark:bg-gray-700/70 text-black dark:text-white">
                        Open
                    </button>
                </div>

                <div className="w-full flex items-center justify-between gap-10">
                    <Link href="#" className="flex items-center gap-2">
                        <div className="icons text-white relative aspect-square rounded-[10px] bg-[oklch(79.55%_0.1875_75.3501)] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 size-10.5 shrink-0">
                            <VideoIcon />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h6 className="font-semibold">Video</h6>
                            </div>
                            <p className="text-sm">Generate videos with Hallux, Pisca, Runway, Luma and more..</p>
                        </div>
                    </Link>
                    <button className="rounded-full py-2 px-7 bg-gray-200/50 dark:bg-gray-700/70 text-black dark:text-white">
                        Open
                    </button>
                </div>

                <div className="w-full flex items-center justify-between gap-10">
                    <Link href="#" className="flex items-center gap-2">
                        <div className="icons realTime text-white relative aspect-square rounded-[10px] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 size-10.5 shrink-0">
                            <RealtimeIcon />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h6 className="font-semibold">Realtime</h6>
                            </div>
                            <p className="text-sm">Realtime AI rendering on a canvas. Instant feedback loops.</p>
                        </div>
                    </Link>
                    <button className="rounded-full py-2 px-7 bg-gray-200/50 dark:bg-gray-700/70 text-black dark:text-white">
                        Open
                    </button>
                </div>

                <div className="w-full flex items-center justify-between gap-10">
                    <Link href="#" className="flex items-center gap-2">
                        <div className="icons enhancer text-white relative aspect-square rounded-[10px] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 size-10.5 shrink-0">
                            <EnhancerIcon />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h6 className="font-semibold">Enhancer</h6>
                                <span className="py-1 px-3 rounded-full bg-blue-500 text-white text-sm capitalize">New</span>
                            </div>
                            <p className="text-sm">Upscale and enhance images and videos up to 22K.</p>
                        </div>
                    </Link>
                    <button className="rounded-full py-2 px-7 bg-gray-200/50 dark:bg-gray-700/70 text-black dark:text-white">
                        Open
                    </button>
                </div>

                <div className="w-full flex items-center justify-between gap-10">
                    <Link href="#" className="flex items-center gap-2">
                        <div className="icons edit text-white relative aspect-square rounded-[10px] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 size-10.5 shrink-0">
                            <EditIcon />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h6 className="font-semibold">Edit</h6>
                                <span className="py-1 px-3 rounded-full bg-blue-500 text-white text-sm capitalize">New</span>
                            </div> 
                            <p className="text-sm">Add objects, changes styles or expand photosa and generations.</p>
                        </div>
                    </Link>
                    <button className="rounded-full py-2 px-7 bg-gray-200/50 dark:bg-gray-700/70 text-black dark:text-white">
                        Open
                    </button>
                </div>

                <div className="w-full flex items-center justify-between gap-10">
                    <Link href="#" className="flex items-center gap-2">
                        <div className="icons lipsync text-white relative aspect-square rounded-[10px] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 size-10.5 shrink-0">
                            <LipsyncIcon />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h6 className="font-semibold">Video Lipsync</h6>
                                <span className="py-1 px-3 rounded-full bg-blue-500 text-white text-sm capitalize">New</span>
                            </div>
                            <p className="text-sm">Lip sync any video to any audio.</p>
                        </div>
                    </Link>
                    <button className="rounded-full py-2 px-7 bg-gray-200/50 dark:bg-gray-700/70 text-black dark:text-white">
                        Open
                    </button>
                </div>

                <div className="w-full flex items-center justify-between gap-10">
                    <Link href="#" className="flex items-center gap-2">
                        <div className="icons img-background text-white relative aspect-square rounded-[10px] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 size-10.5 shrink-0">
                            <MotionTransferIcon />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h6 className="font-semibold">Motion Transfer</h6>
                                <span className="py-1 px-3 rounded-full bg-blue-500 text-white text-sm capitalize">New</span>
                            </div>
                            <p className="text-sm">Transfer motion to images and animate characters.</p>
                        </div>
                    </Link>
                    <button className="rounded-full py-2 px-7 bg-gray-200/50 dark:bg-gray-700/70 text-black dark:text-white">
                        Open
                    </button>
                </div>

                <div className="w-full flex items-center justify-between gap-10">
                    <Link href="#" className="flex items-center gap-2">
                        <div className="icons flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
                            <TrainIcon />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h6 className="font-semibold">Train</h6>
                            </div>
                            <p className="text-sm">Teach WAN to replicate your style, product or character.</p>
                        </div>
                    </Link>
                    <button className="rounded-full py-2 px-7 bg-gray-200/50 dark:bg-gray-700/70 text-black dark:text-white">
                        Open
                    </button>
                </div>

                {showAll && (
                    <>
                    <div className="w-full flex items-center justify-between gap-10">
                        <Link href="#" className="flex items-center gap-2">
                            <div className="icons img-background text-white relative aspect-square rounded-[10px] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 size-10.5 shrink-0">
                                <ImageIcon />
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <h6 className="font-semibold">Image</h6>
                                    <span className="py-1 px-3 rounded-full bg-blue-500 text-white text-sm capitalize">New</span>
                                </div>
                                <p className="text-sm">Generate images with custom styles in plux and ideogram.</p>
                            </div>
                        </Link>
                        <button className="rounded-full py-2 px-7 bg-gray-200/50 dark:bg-gray-700/70 text-black dark:text-white">
                            Open
                        </button>
                    </div>

                    <div className="w-full flex items-center justify-between gap-10">
                        <Link href="#" className="flex items-center gap-2">
                            <div className="icons text-white relative aspect-square rounded-[10px] bg-[oklch(79.55%_0.1875_75.3501)] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 size-10.5 shrink-0">
                                <VideoIcon />
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <h6 className="font-semibold">Video</h6>
                                </div>
                                <p className="text-sm">Generate videos with Hallux, Pisca, Runway, Luma and more..</p>
                            </div>
                        </Link>
                        <button className="rounded-full py-2 px-7 bg-gray-200/50 dark:bg-gray-700/70 text-black dark:text-white">
                            Open
                        </button>
                    </div>

                    <div className="w-full flex items-center justify-between gap-10">
                        <Link href="#" className="flex items-center gap-2">
                            <div className="icons realTime text-white relative aspect-square rounded-[10px] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 size-10.5 shrink-0">
                                <RealtimeIcon />
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <h6 className="font-semibold">Realtime</h6>
                                </div>
                                <p className="text-sm">Realtime AI rendering on a canvas. Instant feedback loops.</p>
                            </div>
                        </Link>
                        <button className="rounded-full py-2 px-7 bg-gray-200/50 dark:bg-gray-700/70 text-black dark:text-white">
                            Open
                        </button>
                    </div>

                    <div className="w-full flex items-center justify-between gap-10">
                        <Link href="#" className="flex items-center gap-2">
                            <div className="icons enhancer text-white relative aspect-square rounded-[10px] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 size-10.5 shrink-0">
                                <EnhancerIcon />
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <h6 className="font-semibold">Enhancer</h6>
                                    <span className="py-1 px-3 rounded-full bg-blue-500 text-white text-sm capitalize">New</span>
                                </div>
                                <p className="text-sm">Upscale and enhance images and videos up to 22K.</p>
                            </div>
                        </Link>
                        <button className="rounded-full py-2 px-7 bg-gray-200/50 dark:bg-gray-700/70 text-black dark:text-white">
                            Open
                        </button>
                    </div>

                    <div className="w-full flex items-center justify-between gap-10">
                        <Link href="#" className="flex items-center gap-2">
                            <div className="icons edit text-white relative aspect-square rounded-[10px] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 size-10.5 shrink-0">
                                <EditIcon />
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <h6 className="font-semibold">Edit</h6>
                                    <span className="py-1 px-3 rounded-full bg-blue-500 text-white text-sm capitalize">New</span>
                                </div> 
                                <p className="text-sm">Add objects, changes styles or expand photosa and generations.</p>
                            </div>
                        </Link>
                        <button className="rounded-full py-2 px-7 bg-gray-200/50 dark:bg-gray-700/70 text-black dark:text-white">
                            Open
                        </button>
                    </div>

                    <div className="w-full flex items-center justify-between gap-10">
                        <Link href="#" className="flex items-center gap-2">
                            <div className="icons lipsync text-white relative aspect-square rounded-[10px] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 size-10.5 shrink-0">
                                <LipsyncIcon />
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <h6 className="font-semibold">Video Lipsync</h6>
                                    <span className="py-1 px-3 rounded-full bg-blue-500 text-white text-sm capitalize">New</span>
                                </div>
                                <p className="text-sm">Lip sync any video to any audio.</p>
                            </div>
                        </Link>
                        <button className="rounded-full py-2 px-7 bg-gray-200/50 dark:bg-gray-700/70 text-black dark:text-white">
                            Open
                        </button>
                    </div>

                    <div className="w-full flex items-center justify-between gap-10">
                        <Link href="#" className="flex items-center gap-2">
                            <div className="icons img-background text-white relative aspect-square rounded-[10px] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 size-10.5 shrink-0">
                                <MotionTransferIcon />
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <h6 className="font-semibold">Motion Transfer</h6>
                                    <span className="py-1 px-3 rounded-full bg-blue-500 text-white text-sm capitalize">New</span>
                                </div>
                                <p className="text-sm">Transfer motion to images and animate characters.</p>
                            </div>
                        </Link>
                        <button className="rounded-full py-2 px-7 bg-gray-200/50 dark:bg-gray-700/70 text-black dark:text-white">
                            Open
                        </button>
                    </div>

                    <div className="w-full flex items-center justify-between gap-10">
                        <Link href="#" className="flex items-center gap-2">
                            <div className="icons flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
                                <TrainIcon />
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <h6 className="font-semibold">Train</h6>
                                </div>
                                <p className="text-sm">Teach WAN to replicate your style, product or character.</p>
                            </div>
                        </Link>
                        <button className="rounded-full py-2 px-7 bg-gray-200/50 dark:bg-gray-700/70 text-black dark:text-white">
                            Open
                        </button>
                    </div>
                    </>
                )}
            </div>
        </section>
    )
}