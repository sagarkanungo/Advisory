import FAQ from "@/components/FAQ/FAQ";
import AdviceSection from "@/components/home/AdviceSection";
import ClientReviewSection from "@/components/home/ClientReviewSection";
import Footer from "@/components/home/Footer";
import HomePage from "@/components/home/HomePage";
import RecommendationSection from "@/components/home/RecommendationSection";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HomePage/>
      <AdviceSection/>  
      <RecommendationSection/>
      <ClientReviewSection/>
      <FAQ/>
      <Footer/>
    </div>
  );
}
