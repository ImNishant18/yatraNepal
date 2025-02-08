import HomeTouristGuide from "@/components/Home/Home_tourist_guide/page";
import { HotelsInformation } from "@/components/Home/Hotels_information/page";
import ImageSlider from "@/components/Home/Image Slider/page";

export default function Home() {
  return (
    <div>
      <ImageSlider />
      <HomeTouristGuide />
      <HotelsInformation />
    </div>
  );
}
