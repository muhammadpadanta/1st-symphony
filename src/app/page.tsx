
import { NavbarMenu } from "../components/navbar";
import {Hero} from "../components/hero";
import {CardSliderAnimation} from "../components/cards";
import {CardSliderAnimation2} from "../components/cards";
import { HeroScroll } from "@/components/heroscroll";
import Footer from '../components/footer';


export default function Home() {
  return (
    <main className="app-background">
      <NavbarMenu />
      <Hero />
      <HeroScroll/>
      <CardSliderAnimation />
      <CardSliderAnimation2 />
      
      
      <Footer />






    </main>
  );
}
