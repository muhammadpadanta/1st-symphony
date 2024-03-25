
import { NavbarMenu } from "@/components/navbar";
import {Hero} from "@/components/hero";
import { HeroParallaxEffect } from "@/components/heroparallax";
import Footer from '../components/footer';
import {FaqMenu} from "@/components/faq";


export default function Home() {
  return (
    <main className="bg-[#0a0a0a]">
      <NavbarMenu />

      <Hero />
      <HeroParallaxEffect/>
      <FaqMenu />
      
      
      <Footer />






    </main>
  );
}
