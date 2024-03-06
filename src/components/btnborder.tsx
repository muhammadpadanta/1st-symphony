"use client";
import React from "react";
import { ButtonBorder } from "@/components/ui/moving-border";

export function BtnBorder() {
    return (
        <div>
            <a href="https://youtube.com" >
                <ButtonBorder
                    borderRadius="1.75rem"
                    className="bg-[#360d12] text-white border-slate-800 z-20 hover:bg-[#640e18] transition-all honk-font text-2xl"

                    >
                    GET TICKET
                </ButtonBorder>
            </a>
            
        </div>
        );
}
