"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Boxes } from "@/components/ui/background-boxes";

function Components({item}) {
    return (
        <div className="w-[300px] h-[175px]">
            <div className="h-full relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
                <div className="absolute text-center inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

                <Boxes />
                <h1 className={cn("md:text-2xl text-center text-xl text-white relative z-20")}>
                    {item.title}
                </h1>
                <p className="text-center text-sm mt-2 text-neutral-300 relative z-20">
                    {item.body}
                </p>
            </div>
        </div>
    )
}

export default Components