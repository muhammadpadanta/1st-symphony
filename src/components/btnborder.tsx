"use client";
import React from "react";
import { ButtonBorder } from "@/components/ui/btn-border";

export function BtnBorder() {
    return (
        <div>
            <a href="https://youtube.com" >
                <ButtonBorder
                    borderRadius="1.75rem"
                    className="bg-[#0b5351]  text-white border-slate-800 z-20 hover:bg-[#092327] hover:text-yellow-300 transition-all danta text-2xl"

                    >
                        <span className="animate-pulse">
                        GET TICKET
                        </span>
                    
                </ButtonBorder>
            </a>
            
        </div>
        );
}
