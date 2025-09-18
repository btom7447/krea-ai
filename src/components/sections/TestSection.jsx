"use client";

import { useState } from "react";
import Link from "next/link";
import ImageIcon from "../svg-icons/ImageIcon";
import VideoIcon from "../svg-icons/VideoIcon";
import RealtimeIcon from "../svg-icons/RealtimeIcon";
import EditIcon from "../svg-icons/EditIcon";
import LipsyncIcon from "../svg-icons/LipsyncIcon";
import MotionTransferIcon from "../svg-icons/MotionTransferIcon";
import TrainIcon from "../svg-icons/TrainIcon";
import EnhancerIcon from "../svg-icons/EnhancerIcon";
import { ChevronDown } from "lucide-react";

export default function GenerateSection() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="p-5 lg:p-10 lg:py-20 bg-white dark:bg-black">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h4 className="text-lg font-semibold text-gray-500 dark:text-gray-200">
          Generate
        </h4>

        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
        >
          {showAll ? "Show less" : "Show all"}
          <ChevronDown
            className={`w-5 h-5 transition-transform ${
              showAll ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10 lg:gap-15">
        {/* First 8 cards (always visible) */}
        <div className="w-full flex items-center justify-between gap-10">
          <Link href="#" className="flex items-center gap-2">
            <div className="icons img-background text-white relative aspect-square rounded-[10px] inset-ring-[0.5px] size-10.5 shrink-0">
              <ImageIcon />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h6 className="font-semibold">Image</h6>
                <span className="py-1 px-3 rounded-full bg-blue-500 text-white text-sm capitalize">
                  New
                </span>
              </div>
              <p className="text-sm">
                Generate images with custom styles in plux and ideogram.
              </p>
            </div>
          </Link>
          <button className="rounded-full py-2 px-7 bg-gray-200/50 dark:bg-gray-700/70 text-black dark:text-white">
            Open
          </button>
        </div>

        {/* repeat similar structure for Video, Realtime, Enhancer, Edit, Lipsync, Motion Transfer, Train (your first 8) */}

        {/* Extra cards (only visible if showAll is true) */}
        {showAll && (
          <>
            <div className="w-full flex items-center justify-between gap-10">
              <Link href="#" className="flex items-center gap-2">
                <div className="icons text-white bg-gradient-to-tr from-pink-500 to-purple-500 relative aspect-square rounded-[10px] size-10.5 shrink-0">
                  {/* Example extra card */}
                  <VideoIcon />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h6 className="font-semibold">Extra Card 1</h6>
                  </div>
                  <p className="text-sm">
                    Example additional feature revealed on expand.
                  </p>
                </div>
              </Link>
              <button className="rounded-full py-2 px-7 bg-gray-200/50 dark:bg-gray-700/70 text-black dark:text-white">
                Open
              </button>
            </div>

            <div className="w-full flex items-center justify-between gap-10">
              <Link href="#" className="flex items-center gap-2">
                <div className="icons text-white bg-gradient-to-tr from-green-500 to-blue-500 relative aspect-square rounded-[10px] size-10.5 shrink-0">
                  <RealtimeIcon />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h6 className="font-semibold">Extra Card 2</h6>
                  </div>
                  <p className="text-sm">
                    Another extra item when "Show all" is expanded.
                  </p>
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
  );
}
