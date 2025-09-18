"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => setMounted(true), [])

    if (!mounted) return null

    const isDark = theme === "dark"

    return (
        <button
            className="relative flex items-center text-black dark:text-white bg-gray-200/50 dark:bg-gray-700/70 p-2 rounded-lg cursor-pointer"
            onClick={() => setTheme(isDark ? "light" : "dark")}
        >
            <Sun size={18} strokeWidth={1}
                className={`transition-all duration-300 ${
                isDark ? "scale-0 rotate-90" : "scale-100 rotate-0"
                }`}
            />
            <Moon size={18} strokeWidth={1}
                className={`absolute transition-all duration-300 ${
                isDark ? "scale-100 rotate-0" : "scale-0 -rotate-90"
                }`}
            />
        </button>
    )
}
