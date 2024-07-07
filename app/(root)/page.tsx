import { Button } from "@/components/ui/button";
import Image from "next/image";
import ImageSlider from "../../components/ImageSlider";
import VideoSlider from "@/components/VideoSlider";
import About from "./aboutUs/page";
import Objectives from "./objectives/page";
export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center h-screen rounded-xl">
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
    </main>
  );
}
