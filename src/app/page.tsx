import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import Wallpaper from "@/components/Wallpaper";
import { Banner } from "@/components/banner";
import { Branding } from "@/components/branding";
import ChooseUs from "@/components/chooseUs";
import ConnectCompany from "@/components/connectCompany";
import Portfolio from "@/components/portfolio";
import Services from "@/components/services";

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto">
      <Banner />
      <Services />
       <Pricing />
       <Branding/> 
      <Testimonial />
      <ChooseUs />
      <ConnectCompany/>
      {/* <Wallpaper/> */}
      {/* <Portfolio /> */}
      {/* <ConnectCompany /> */}
      <Footer />
    </section>
  );
}
