"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/utils/cn";

export function HeroSection() {
  return (
    <div className="h-[40rem] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1
        className={cn(
          "md:text-7xl text-5xl text-white relative z-20 bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500 inline-block bg-clip-text text-transparent"
        )}
      >
        Devesh, <span className="text-white">here</span>
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20 text-wrap text-lg p-auto underline decoration-2 decoration-indigo-500">
        {`I specialize in making websites that don't look like they were built in
        1999. (Yes, I'm a web developer)`}
      </p>
    </div>
  );
}
