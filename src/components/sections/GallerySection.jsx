import { BookText, CreditCard } from "lucide-react";
import LogoIcon from "../svg-icons/LogoIcon";
import MobbinIcon from "../svg-icons/MobbinIcon";

export default function GallerySection() {
    return (
        <section className="">
            <div className="px-5 lg:px-10 pb-2 flex items-center justify-between gap-10">
                <h4 className="text-lg font-semibold text-gray-500 dark:text-gray-200">
                    Gallery
                </h4>
                <div className="flex items-center gap-5">
                    <button className="flex items-center gap-3 text-md text-black dark:text-white bg-gray-200/50 dark:bg-gray-700/70 p-2 rounded-lg" 
                        aria-label="Gallery"
                    >
                        <BookText size={18} strokeWidth={1} />
                        Legal
                    </button>
                    <button className="flex items-center gap-3 text-md text-black dark:text-white bg-gray-200/50 dark:bg-gray-700/70 p-2 rounded-lg" 
                        aria-label="Support"
                    >
                        <CreditCard size={18} strokeWidth={1} />
                        Pricing
                    </button>
                </div>
            </div>
            <div className="p-5 lg:p-10 bg-black/80 dark:bg-gray-700 flex gap-10 flex-col lg:flex-row items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-black dark:bg-white text-white dark:text-black w-fit">
                        <LogoIcon />
                    </div>
                    <h4 className="text-3xl text-white">Krea AI</h4>
                </div>
                <div className="flex items-center gap-5">
                    <h4 className="text-3xl text-white">curated by</h4>
                    <div className="text-white ">
                        <MobbinIcon />
                    </div>
                </div>
            </div>
        </section>
    )
}