
import ImageSlider from "../../components/ImageSlider";
import VideoSlider from "@/components/VideoSlider";
import About from "./aboutUs/page";
import Objectives from "./objectives/page";
import PaymentCard  from "./donation/page";
import ContactUs from "./contactUs/page";
import AdmissionForm from "./admissionform/page";
export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center h-screen rounded-xl mt-[5.3rem]">
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
        <div className="sm:mb-12 md:mb-0">
            <ContactUs />
        </div>
        <div className="sm:mb-12 md:mb-0">
            <AdmissionForm />
        </div>
    </main>
  );
}
