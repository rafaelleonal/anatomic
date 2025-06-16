import MainBanner from "@/components/MainBanner";
import Hero from "@/components/Hero";
import SubBrands from "@/components/SubBrands";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import OurBrand from "@/components/OurBrand";
// import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="bg-muted/50 flex w-full flex-col items-center justify-center space-y-5">
      <MainBanner />
      <div className="px-4 md:px-0 w-full flex flex-col items-center justify-center gap-y-16">
        <OurBrand />
        <Hero />
        <SubBrands />
        <Services />
        <Testimonials />
        {/* <FAQ /> */}
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
