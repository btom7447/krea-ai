"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import ImageIcon from "../svg-icons/ImageIcon"
import VideoIcon from "../svg-icons/VideoIcon"
import RealtimeIcon from "../svg-icons/RealtimeIcon"
import MotionTransferIcon from "../svg-icons/MotionTransferIcon"
import ThreedIcon from "../svg-icons/ThreedIcon"
import EditIcon from "../svg-icons/EditIcon"
import LipsyncIcon from "../svg-icons/LipsyncIcon"
import RestyleIcon from "../svg-icons/RestyleIcon"
import TrainIcon from "../svg-icons/TrainIcon"
import AssetsIcon from "../svg-icons/AssetsIcon"
import GalleryIcon from "../svg-icons/GalleryIcon"
import EnhancerIcon from "../svg-icons/EnhancerIcon"

export function HomeDropdown({ onClose }) {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="pt-20 pb-10 px-10 absolute left-1/2 -top-2 -translate-x-1/2 z-30 max-w-3xl w-full  bg-white dark:bg-black rounded-md border-[2px] border-gray-200/70 dark:border-gray-800 grid grid-cols-3 gap-6"
            >
                {/* Column 1 */}
                <div>
                    <h4 className="text-lg font-semibold text-gray-500 dark:text-gray-200 mb-3">
                        Generate
                    </h4>
                    <div className="flex flex-col gap-5">
                        <Link
                            href="#"
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
                        >
                            <div className="icons img-background text-white relative aspect-square rounded-[10px] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 size-10.5 shrink-0">
                                <ImageIcon />
                            </div>
                            
                            Images
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
                        >
                            <div className="icons text-white relative aspect-square rounded-[10px] bg-[oklch(79.55%_0.1875_75.3501)] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 size-10.5 shrink-0">
                                <VideoIcon />
                            </div>
                            Video
                        </Link>
                        <Link href="#"
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
                        >
                            <div className="icons realTime text-white relative aspect-square rounded-[10px] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 size-10.5 shrink-0">
                                <RealtimeIcon />
                            </div>
                            Realtime
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
                        >
                            <div className="icons img-background text-white relative aspect-square rounded-[10px] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 size-10.5 shrink-0">
                                <MotionTransferIcon />
                            </div>
                            Motion Transfer
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
                        >
                            <div className="icons text-white relative flex aspect-square items-center justify-center rounded-[10px] inset-ring-[0.5px] inset-ring-white/10 size-10.5 shrink-0 bg-[#2f2f2f]">
                                <ThreedIcon />
                            </div>
                            3D Objects
                        </Link>
                    </div>
                </div>

                {/* Column 2 */}
                <div>
                    <h4 className="text-lg font-semibold text-gray-500 dark:text-gray-200 mb-3">
                        Edit
                    </h4>
                    <div className="flex flex-col gap-5">
                        <Link
                            href="#"
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
                        >
                            <div className="icons enhancer text-white relative aspect-square rounded-[10px] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 size-10.5 shrink-0">
                                <EnhancerIcon />
                            </div>
                                Edit
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
                        >
                            <div className="icons edit text-white relative aspect-square rounded-[10px] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 size-10.5 shrink-0">
                                <EditIcon />
                            </div>
                            Edit
                        </Link>
                        <Link href="#"
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
                        >
                            <div className="icons lipsync text-white relative aspect-square rounded-[10px] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 size-10.5 shrink-0">
                                <LipsyncIcon />
                            </div>
                            Video Lipsync
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
                        >
                            <div className="icons relative text-white aspect-square rounded-[10px] bg-[oklch(70%_0.1776_23.29)] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 size-10.5 shrink-0">
                                <RestyleIcon />
                            </div>
                            Video Restyle
                        </Link>
                    </div>
                </div>

                {/* Column 3 */}
                <div>
                    <h4 className="text-lg font-semibold text-gray-500 dark:text-gray-200 mb-3">
                        Assets
                    </h4>
                    <div className="flex flex-col gap-5">
                        <Link
                            href="#"
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
                        >
                            <TrainIcon />
                            Train
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
                        >
                            <AssetsIcon />
                            Assets
                        </Link>
                        <Link href="#"
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
                        >
                            <GalleryIcon />
                            Gallery
                        </Link>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}
