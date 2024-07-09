
import ImageSlider from "../../components/ImageSlider";
import VideoSlider from "@/components/VideoSlider";
import About from "./aboutUs/page";
import Objectives from "./objectives/page";
import PaymentCard  from "./donation/page";
export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center h-screen rounded-xl ">
      <ImageSlider />
      </div>
      <div>
      <VideoSlider />
      </div>
        <div>
        <About />
        </div>
        <div>
      <Objectives />
      </div>
      <div >
            <PaymentCard />
        </div>
    </main>
  );
}
