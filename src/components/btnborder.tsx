"use client";
import React from "react";
import { ButtonBorder } from "@/components/ui/moving-border";

export function BtnBorder() {
    return (
        <div>
            <a href="https://youtube.com" >
                <ButtonBorder
                    borderRadius="1.75rem"
                    className="bg-slate-900 text-white border-slate-800 z-20 hover:bg-slate-800 transition-all"

                    >
                    GET TICKET
                </ButtonBorder>
            </a>
            
        </div>
        );
}
