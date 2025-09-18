"use client"

import { useState } from "react"
import SidebarIcon from "../svg-icons/SidebarIcon"
import { HeaderLeft } from "./HeaderLeft"
import { HeaderNav } from "./HeaderNav"
import { HeaderRight } from "./HeaderRight"
import { ThemeToggle } from "./ThemeToggle"
import Sidebar from "./Sidebar"

export function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <header className="bg-background text-foreground dark:bg-background dark:text-foreground transition-colors duration-300 py-3 px-5 lg:px-10">
            {/* Desktop */}
            <div className="hidden w-full xl:flex gap-10 items-center justify-between">
                <HeaderLeft />
                <HeaderNav />
                <HeaderRight />
            </div>

            {/* Mobile */}
            <div className="w-full flex xl:hidden justify-between items-center gap-20">
                <button
                    className="flex items-center gap-3 text-md text-black dark:text-white bg-gray-200/50 dark:bg-gray-700/70 p-2 rounded-lg"
                    aria-label="Sidebar"
                    onClick={() => setIsSidebarOpen(true)}
                >
                    <SidebarIcon />
                </button>
                <ThemeToggle />
            </div>

            {/* Sidebar Overlay */}
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        </header>
    )
}
