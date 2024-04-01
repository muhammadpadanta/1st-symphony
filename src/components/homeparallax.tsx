"use client";
import React from "react";
import { HomeParallax } from "@/components/ui/home-parallax";
import {featuredArtist} from "@/constants";

export function HomeParallaxEffect() {
  
  return <HomeParallax products={featuredArtist} />;

}


