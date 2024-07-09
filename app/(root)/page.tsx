
import ImageSlider from "../../components/ImageSlider";
import VideoSlider from "@/components/VideoSlider";
import About from "./aboutUs/page";
import Objectives from "./objectives/page";
import PaymentCard  from "./donation/page";
export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center h-screen rounded-xl mb-12">
      <ImageSlider />
      </div>
      <div className="sm:mb-24 md:mb-0">
      <VideoSlider />
      </div>
        <div className="sm:mb-24 md:mb-0">
        <About />
        </div>
        <div >
      <Objectives />
      </div>
      <div className="sm:mb-12 md:mb-0">
            <PaymentCard />
        </div>
    </main>
  );
}
