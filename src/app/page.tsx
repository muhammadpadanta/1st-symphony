
import { NavbarMenu } from "@/components/navbar";
import {HeroHome} from "@/components/herohome";
import { HomeParallaxEffect } from "@/components/homeparallax";
import Footer from '../components/footer';
import {FaqMenu} from "@/components/faq";


export default function Home() {
  return (

    <main className="bg-[#0a0a0a]">
      <NavbarMenu />
      <HeroHome />
      <HomeParallaxEffect/>
      <FaqMenu />
      <Footer />

    </main>
  );
}
