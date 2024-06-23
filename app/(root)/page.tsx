import { Button } from "@/components/ui/button";
import Image from "next/image";
import ImageSlider from "../../components/ImageSlider";
import VideoSlider from "@/components/VideoSlider";
import About from "@/components/About";
export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center h-screen">
      <ImageSlider />
      </div>
      <div className="my-5 py-5">
      <VideoSlider />
      </div>
        <div className="mt-5 ">
        <About />
        </div>
    </main>
  );
}
