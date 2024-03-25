
import { NavbarMenu } from "../components/navbar";
import {Hero} from "../components/hero";
import {CardSliderAnimation} from "../components/cards";
import {CardSliderAnimation2} from "../components/cards";
import { HeroParallaxEffect } from "@/components/heroparallax";
import Footer from '../components/footer';
import {FaqMenu} from "../components/faq";

export default function Home() {
  return (
    <main>
      <NavbarMenu />
      <Hero />
      <HeroParallaxEffect/>
      <FaqMenu />
      
      
      <Footer />






    </main>
  );
}
