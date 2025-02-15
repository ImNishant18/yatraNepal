import Header from "@/components/header";
import HomeTouristGuide from "@/components/tourist_guide";
import ImageSlider from "@/components/image_slider";
import HotelBanner from "@/components/hotel_banner";
import MoneyExchange from "@/components/moneyexchange";
export default function Home() {
  return (
    <div>
      <Header />
      <div className="pt-[200px] md:pt-[240px] pb-8">
        <ImageSlider />
      </div>
      <HomeTouristGuide />
      <div className="bg-gray-100 py-8">
        <HotelBanner />
        <MoneyExchange />
      </div>
    </div>
  );
}
