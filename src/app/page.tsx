import Header from "@/components/Home Page/header";
// import HomeTouristGuide from "@/components/Home Page/tourist_guide";
import ImageSlider from "@/components/Home Page/image_slider";
import HotelBanner from "@/components/Home Page/hotel_banner";
import MoneyExchange from "@/components/Home Page/moneyexchange";
import PromotionalCard from "@/components/Home Page/promotional-card";
import PlaceBanner from "@/components/Home Page/place_banner";
export default function Home() {
  return (
    <div>
      <Header />
      <div className="pt-[200px] md:pt-[240px] pb-8">
        <ImageSlider />
      </div>

      <div className="container mx-auto">
        <PlaceBanner />
      </div>
      <HotelBanner />
      <MoneyExchange />
      <PromotionalCard />
    </div>
  );
}