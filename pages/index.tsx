import Image from "next/image";
import { Inter } from "next/font/google";
import Subtitle from "@/components/subtitle";
// import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import Services from "@/components/Services";
import Explore from "@/components/Explore";
// import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-white px-16">
      <HeroSection />
      <Services />
      <Explore />
      <Gallery />
    </div>
  );
}
