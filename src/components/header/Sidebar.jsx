"use client"

import { SettingsIcon, XIcon } from "lucide-react"
import ProfileButton from "./ProfileButton"
import Link from "next/link"
import LogoIcon from "../svg-icons/LogoIcon"
import UpgradeIcon from "../svg-icons/UpgradeIcon"
import Image from "next/image"
import ImageIcon from "../svg-icons/ImageIcon"
import VideoIcon from "../svg-icons/VideoIcon"
import RealtimeIcon from "../svg-icons/RealtimeIcon"
import EditIcon from "../svg-icons/EditIcon"
import LipsyncIcon from "../svg-icons/LipsyncIcon"
import MotionTransferIcon from "../svg-icons/MotionTransferIcon"


export default function Sidebar({ isOpen, onClose }) {
    return (
        <>
            {/* Backdrop with blur */}
            {isOpen && (
                <div
                    onClick={onClose}
                    className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40"
                />
            )}

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full min-w-100 max-w-[90dvw] bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 z-50 
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="flex flex-col h-full">
                    {/* Header with Close Button */}
                    <div className="flex justify-between items-center bg-white dark:bg-black p-5 shrink-0">
                        <button
                            onClick={onClose}
                            aria-label="Close Sidebar"
                            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            <XIcon size={20} strokeWidth={2} />
                        </button>
                        <ProfileButton />
                    </div>

                    {/* Sidebar Content */}
                    <div className="bg-white dark:bg-black flex-1 overflow-y-auto p-5 space-y-5">
                        <div className="mb-5 flex items-center justify-between gap-10">
                            <Link href="/" className="flex items-center gap-2">
                                <div className="icons bg-primary-800 text-primary-150 dark:text-primary-850 dark:bg-primary-150 relative flex aspect-square h-11 items-center justify-center rounded-[10px] opacity-100">
                                    <LogoIcon />
                                </div>
                                Home
                            </Link>
                        </div>
                        
                        <div className="mb-5 w-full flex flex-col items-start justify-start gap-10">
                            <h4 className="text-lg font-semibold text-gray-500 dark:text-gray-200 -mb-5">
                                Account
                            </h4>
                            <div className="w-full flex items-center justify-between gap-10">
                                <Link href="#" className="flex items-center gap-2">
                                    <div className="icons text-white bg-gray-900 dark:bg-gray-200  dark:text-black bg-opacity-15 relative aspect-square h-11 rounded-xl opacity-100">
                                        <UpgradeIcon />
                                    </div>
                                    Upgrade
                                </Link>
                                <button className="rounded-full py-2 px-7 bg-blue-600 text-white">
                                    Get Pro
                                </button>
                            </div>

                            <div className="w-full flex items-center justify-between gap-10">
                                <Link href="#" className="flex items-center gap-2">
                                    <div className="icons rounded-full flex items-center">
                                        <Image 
                                            src="/images/profile-icon.jpg"
                                            alt="Profile placeholder"
                                            width={40}
                                            height={40}
                                            className="object-cover rounded-full"
                                        />
                                    </div>
                                    Profile
                                </Link>
                                <button className="rounded-full py-2 px-7 bg-gray-200/50 dark:bg-gray-700/70 text-black dark:text-white">
                                    Open
                                </button>
                            </div>

                            <div className="w-full flex items-center justify-between gap-10">
                                <Link href="#" className="flex items-center gap-2">
                                    <div className="icons flex items-center justify-center text-black bg-gray-200/50 dark:bg-gray-700/70 dark:text-black bg-opacity-15 relative aspect-square h-11 rounded-xl opacity-100">
                                        <SettingsIcon />
                                    </div>
                                    Settings
                                </Link>
                                <button className="rounded-full py-2 px-7 bg-gray-200/50 dark:bg-gray-700/70 text-black dark:text-white">
                                    Open
                                </button>
                            </div>
                        </div>

                        <div className="mb-5 w-full flex flex-col items-start justify-start gap-10">
                            <h4 className="text-lg font-semibold text-gray-500 dark:text-gray-200 -mb-5">
                                Apps
                            </h4>
                            <div className="w-full flex items-center justify-between gap-10">
                                <Link href="#" className="flex items-center gap-2">
                                    <div className="icons img-background text-white relative aspect-square rounded-[10px] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 size-10.5 shrink-0">
                                        <ImageIcon />
                                    </div>
                                    Image
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
                                    Video
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
                                    Realtime
                                </Link>
                                <button className="rounded-full py-2 px-7 bg-gray-200/50 dark:bg-gray-700/70 text-black dark:text-white">
                                    Open
                                </button>
                            </div>

                            <div className="w-full flex items-center justify-between gap-10">
                                <Link href="#" className="flex items-center gap-2">
                                    <div className="icons enhancer text-white relative aspect-square rounded-[10px] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 size-10.5 shrink-0">
                                        <EditIcon />
                                    </div>
                                    Enhancer
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
                                    Video Lipsync
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
                                    Motion Transfer
                                </Link>
                                <button className="rounded-full py-2 px-7 bg-gray-200/50 dark:bg-gray-700/70 text-black dark:text-white">
                                    Open
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
