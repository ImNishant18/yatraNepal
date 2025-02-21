import Header from "@/components/Home Page/header";
import ImageSlider from "@/components/Home Page/image_slider";
import HotelBanner from "@/components/Home Page/hotel_banner";
import MoneyExchange from "@/components/Home Page/moneyexchange";
import PlaceBanner from "@/components/Home Page/place_banner";
import Banner2 from "@/components/Home Page/banner2";
import Banner1 from "@/components/Home Page/banner1";
export default function Home() {
  return (
    <div>
      <Header />
      <div className="pt-[200px] md:pt-[240px] pb-8">
        <ImageSlider />
      </div>
      <div>
        <PlaceBanner />
        <Banner1 />
        <HotelBanner />
        <Banner2 />
        <MoneyExchange />
      </div>
    </div>
  );
}
