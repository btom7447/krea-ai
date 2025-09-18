"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, CreditCardIcon, LogOutIcon, SettingsIcon, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProfileButton() {
  const [open, setOpen] = useState(false)

    return (
        <div className="relative">
            {/* Button */}
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="flex items-center justify-between gap-5 lg:gap-8 cursor-pointer"
            >
                {/* Profile image */}
                <div className="flex items-center gap-2">
                    <Image
                        src="/images/profile-icon.jpg"
                        alt="Profile"
                        width={32}
                        height={32}
                        className="w-10 h-10 rounded-full"
                    />
                    <p className="text-md text-black dark:text-white">Benjamin</p>
                </div>
                {/* Chevron */}
                {open ? (
                    <ChevronUp size={18} strokeWidth={1} className="dark:text-gray-300" />
                    ) : (
                    <ChevronDown size={18} strokeWidth={1} className="text-gray-600 dark:text-gray-300" />
                )}
            </button>

            {/* Dropdown */}
            {open && (
                <div className="absolute left-0 mt-5 min-w-50 bg-white dark:bg-black shadow-sm rounded-xl z-40">
                    <div className=" space-y-2 p-1 ">
                        <Link
                            href="#"
                            className="flex items-center gap-2 p-2 rounded-xl text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            <SettingsIcon size={20} strokeWidth={1} />
                            Manage Account
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-2 p-2 rounded-xl text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            <CreditCardIcon size={20} strokeWidth={1} />
                            Pricing & Plan
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-2 p-2 rounded-xl text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            <Users size={20} strokeWidth={1} />
                            Join Community
                        </Link>
                        <button
                            className="w-full flex items-center gap-2 p-2 rounded-xl text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            <LogOutIcon size={20} strokeWidth={1} />
                            Logout
                        </button>
                    </div>
                    <div className="flex flex-col py-4 px-2 border-t border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-sm text-black dark:text-white">0% daily credits used</p>
                        <span className="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700" />
                    </div>
                </div>
            )}
        </div>
    )
}
