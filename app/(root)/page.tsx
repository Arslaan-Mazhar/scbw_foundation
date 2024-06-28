import { Button } from "@/components/ui/button";
import Image from "next/image";
import ImageSlider from "../../components/ImageSlider";
import VideoSlider from "@/components/VideoSlider";
import About from "@/components/shared/About";
export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center h-screen rounded-xl">
      <ImageSlider />
      </div>
      <div className="my-2">
      <VideoSlider />
      </div>
        <div className="my-1 ">
        <About />
        </div>
    </main>
  );
}
