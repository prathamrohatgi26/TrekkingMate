import Hero from "@/components/home/Hero";
import KPIs from "@/components/home/KPIs";
import Activities from "@/components/home/Activities";
import Blogs from "@/components/home/Blogs";
import WhyUs from "@/components/home/WhyUs";
import Reviews from "@/components/home/Reviews";
import FAQs from "@/components/home/FAQs";
import InstaGrid from "@/components/home/InstaGrid";
import FeaturedTrek from "@/components/home/FeaturedTrek";

export default function Home() {
  return (
    <>
      <Hero />
      <KPIs />
      <WhyUs />
      <Blogs />
      <Activities />
      <Reviews />
      <FeaturedTrek />
      <InstaGrid />
      <FAQs />
    </>
  );
}
