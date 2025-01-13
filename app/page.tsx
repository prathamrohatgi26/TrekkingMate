import Hero from "@/components/home/Hero";
import KPIs from "@/components/home/KPIs";
import Activities from "@/components/home/Activities";
import Blogs from "@/components/home/Blogs";
import WhyUs from "@/components/home/WhyUs";
import Reviews from "@/components/home/Reviews";
import FAQs from "@/components/home/FAQs";
import InstaGrid from "@/components/home/InstaGrid";
import FeaturedTrek from "@/components/home/FeaturedTrek";

export default async function Home() {
  const [homepageData, blogData, tourData] = await Promise.all([
    fetch("https://api.trekkingmate.com/api/homepage?populate=*"),
    fetch(
      "https://api.trekkingmate.com/api/blogs?populate=image&sort=createdAt:desc"
    ),
    fetch("https://api.trekkingmate.com/api/tour-types?populate=*"),
  ]);

  const [res, blogRes, tourTypes] = await Promise.all([
    homepageData.json(),
    blogData.json(),
    tourData.json(),
  ]);

  return (
    <>
      <Hero res={res?.data} />
      <KPIs res={res?.data?.metrics} />
      <WhyUs
        heading={res?.data?.whyUsHeading}
        content={res?.data?.whyUsContent}
        parallax={res?.data?.parallaxImage}
      />
      <Activities tourData={tourTypes?.tours} />
      <Blogs blogData={blogRes.data} />
      <FeaturedTrek />
      <Reviews />
      <InstaGrid />
      <FAQs />
    </>
  );
}
