
import { NavbarMenu } from "@/components/navbar";
import {HeroHome} from "@/components/herohome";
import { HomeParallaxEffect } from "@/components/homeparallax";
import Footer from '../components/footer';
import {FaqMenu} from "@/components/faq";
import {NextUIProvider} from "@nextui-org/react";
import LoginModal from "@/components/loginmodal";
export default function Home() {
  return (
      <NextUIProvider>
    <main className="bg-[#0a0a0a]">
      <NavbarMenu />
      <HeroHome />
      <HomeParallaxEffect/>
      <FaqMenu />
      <Footer />
      <LoginModal/>

    </main>
          </NextUIProvider>
  );
}
