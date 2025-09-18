"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="min-w-screen max-w-2xl h-fit xl:h-[60dvh] flex flex-col items-center justify-center bg-white dark:bg-black p-5 py-10">
      <h1 className="text-xl lg:text-5xl text-center text-black dark:text-white mb-10">
        What do you want to create today?
      </h1>

      {/* Input + Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
        {/* Left buttons + input */}
        <div className="flex flex-col sm:flex-row gap-3 flex-1">
          {/* Option buttons */}
          <div className="flex gap-2 flex-wrap">
            <Button
              variant="outline"
              size="sm"
              className="transition-colors duration-200 hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/30"
            >
              Option 1
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="transition-colors duration-200 hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/30"
            >
              Option 2
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="transition-colors duration-200 hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/30"
            >
              Option 3
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="transition-colors duration-200 hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/30"
            >
              Option 4
            </Button>
          </div>

          {/* Input field */}
          <Input
            placeholder="Describe an image or change the generation type"
            className="flex-1 transition-colors duration-200 focus:ring-2 focus:ring-accent/70 dark:focus:ring-accent/50"
          />
        </div>

        {/* Generate button */}
        <Button
          size="lg"
          className="whitespace-nowrap bg-accent text-accent-foreground hover:bg-accent/90 dark:bg-accent/80 dark:hover:bg-accent/70 transition-colors duration-200"
        >
          Generate
        </Button>
      </div>
    </section>
  )
}
