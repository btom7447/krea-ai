"use client"

import { Bell, ImageIcon, Headphones } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"

export function HeaderRight() {
    return (
        <div className="flex items-center gap-5">
            <button className="flex items-center gap-3 text-md text-black dark:text-white bg-gray-200/50 dark:bg-gray-700/70 p-2 rounded-lg" 
                aria-label="Gallery"
            >
                <ImageIcon size={18} strokeWidth={1} />
                Gallery
            </button>
            <button className="flex items-center gap-3 text-md text-black dark:text-white bg-gray-200/50 dark:bg-gray-700/70 p-2 rounded-lg" 
                aria-label="Support"
            >
                <Headphones size={18} strokeWidth={1} />
                Support
            </button>
            <button className="flex items-center text-black dark:text-white bg-gray-200/50 dark:bg-gray-700/70 p-2 rounded-lg" 
                aria-label="Notifications"
            >
                <Bell size={18} strokeWidth={1} />
            </button>
            <ThemeToggle />
        </div>
    )
}
