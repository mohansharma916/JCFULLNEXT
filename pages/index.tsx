import Image from "next/image";
import { Inter } from "next/font/google";
import Subtitle from "@/src/components/subtitle";
// import Header from "@/components/Header";
import HeroSection from "@/src/components/HeroSection/HeroSection";
import Services from "@/src/components/Services";
import Explore from "@/src/components/Explore";
// import Footer from "@/components/Footer";
import Gallery from "@/src/components/Gallery";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import Testimonials from "@/src/components/Testimonials";
import JoinUs from "@/src/components/JoinUs";
import StepsWithArrows from "@/src/components/StepsWithArrow";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-white px-16 2xs:p-2">
        <HeroSection />
        <JoinUs />
        <Explore />
        <Services />
        <Gallery />
        {/* <Testimonials /> */}
      </div>
      <Footer />
    </>
  );
}
