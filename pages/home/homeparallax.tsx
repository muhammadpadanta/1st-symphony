"use client";
import React from "react";
import { HomeParallax } from "@/components/ui/home-parallax";
import {featuredArtist} from "@/constants";

export default function HomeParallaxEffect() {
  
  return <HomeParallax artist={featuredArtist} />;

}


