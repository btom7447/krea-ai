"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useState } from "react"
import { HomeDropdown } from "./HomeDropdown"
import HomeIcon from "../svg-icons/HomeIcon"
import ImageIcon from "../svg-icons/ImageIcon"
import VideoIcon from "../svg-icons/VideoIcon"
import EnhancerIcon from "../svg-icons/EnhancerIcon"
import EditIcon from "../svg-icons/EditIcon"
import RealtimeIcon from "../svg-icons/RealtimeIcon"
import AssetIcon from "../svg-icons/AssetIcon"

export function HeaderNav() {
    const pathname = usePathname()
    const [isHomeOpen, setIsHomeOpen] = useState(false)

    const navItems = [
        { icon: <HomeIcon />, name: "Home", href: "/" },
        { icon: <ImageIcon />, name: "Images", href: "/images" },
        { icon: <VideoIcon />, name: "Video", href: "/video" },
        { icon: <EnhancerIcon />, name: "Enhancer", href: "/enhancer" },
        { icon: <RealtimeIcon />, name: "Draw", href: "/draw" },
        { icon: <EditIcon />, name: "Compass", href: "/compass" },
        { icon: <AssetIcon />, name: "Folder", href: "/folder" },
    ]

    return (
        <div className="relative w-full flex justify-center">
            <nav className="flex justify-center items-center bg-gray-200/50 dark:bg-gray-700/70 rounded-2xl p-[4px] backdrop-blur-sm relative z-40">
                {navItems.map((item, idx) => {
                    const isActive = pathname === item.href
                    const isHome = item.name === "Home"

                    return (
                        <div key={idx} className="relative">
                            <button
                                onClick={() => {
                                    if (isHome) {
                                        setIsHomeOpen((prev) => !prev)
                                    }
                                }}
                                className={`group relative rounded-xl p-1 text-gray-800 dark:text-white cursor-pointer ${
                                    isActive
                                        ? "bg-white dark:bg-gray-950 shadow-sm"
                                        : "hover:bg-transparent"
                                }`}
                                aria-label={item.name}
                            >
                                {/* Icon */}
                                <div className="relative z-10 flex items-center justify-center">
                                    {item.icon && (
                                        <span className="w-10 h-8 flex items-center justify-center">
                                            {item.icon}
                                        </span>
                                    )}
                                </div>

                                {/* Hover effect (only if NOT active) */}
                                {!isActive && (
                                    <span className="absolute inset-0 rounded-xl before:absolute before:inset-0 before:left-5 w-15 before:rounded-xl before:bg-gray-300 dark:before:bg-gray-700 before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-100"></span>
                                )}

                                {/* Tooltip (only if NOT active AND not Home) */}
                                {!isActive && !isHome && (
                                    <span className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-200/50 dark:bg-gray-800 text-black dark:text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                        {item.name}
                                    </span>
                                )}
                            </button>
                        </div>
                    )
                })}
            </nav>

            {/* Dropdown below nav */}
            {isHomeOpen && (
                <HomeDropdown onClose={() => setIsHomeOpen(false)} />
            )}
        </div>
    )
}