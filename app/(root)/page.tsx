import ImageSlider from "../../components/ImageSlider";
import About from "./aboutUs/page";
import Objectives from "./objectives/page";
import PaymentCard from "./donation/page";
import ContactUs from "./contactUs/page";
import Head from "next/head";
import MembershipForm from "./membership/page";
import CheckoutForm from "@/components/CheckoutForm/page";
import AdminUpload from "./files/FileUpload";

export default function Home() {
  return (
    <>
      <Head>
        <title>SCBW Foundation</title>
        <meta
          name="description"
          content="Support the welfare of the visually impaired with SCBW Foundation. Join us in our mission to make a difference."
        />
        <meta
          property="og:title"
          content="Special Campaign for Blinds Welfare (SCBW) Foundation"
        />
        <meta
          property="og:description"
          content="Support the welfare of the visually impaired with SCBW Foundation."
        />
        <meta property="og:image" content="/logo1.png" />
        <meta property="og:url" content="https://scbwfoundation.org" />
        <meta
          name="keywords"
          content="Blinds Welfare, visually impaired support, special campaign, charity, non-profit, disability aid, social welfare, foundation for blinds, Blind Welfare Foundation,Support for the Visually Impaired,Charity for the Blind,Donate to Blind Charities,Services for the Visually Impaired,Blindness Support Programs,Blind and Visually Impaired Assistance, Education for the Blind,Vocational Training for the Blind,Blindness Awareness Campaign,Accessible Resources for the Blind,Blind Welfare Programs,Blindness Rehabilitation Services,Community Support for the Blind, How to support blind welfare initiatives,Best charities for the blind and visually impaired,Volunteer opportunities with blind charities,Resources for families of the visually impaired,Educational programs for blind children, Blind welfare foundation in Lalamusa Gujrat pakistan,Visually impaired services near me,Local charities for the blind" />    <meta name="author" content="Blinds Welfare Foundation" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@blindswelfare" />
        <meta
          name="twitter:title"
          content="Special Campaign Blinds Welfare Foundation "
        />
        <meta
          name="twitter:description"
          content="Support the Blinds Welfare Foundation in their special campaign to improve the lives of the visually impaired."
        />
        <meta
          name="twitter:image"
          content="https://www.scbwfoundation.org/og-image.jpg"
        />
      </Head>
      <main>
        <div className="flex justify-center items-center h-screen rounded-xl lg:mt-[6rem]">
          <ImageSlider />
        </div>
        <div className="sm:mb-24 md:mb-0"></div>
        <div>
          <Objectives />
        </div>
        <div className="sm:mb-24 md:mb-0">
          <About />
        </div>
        <div className="sm:mb-12 md:mb-0">
          <MembershipForm />
        </div>
        <div className="sm:mb-12 md:mb-0">
          <PaymentCard />
        </div>
        <div>
          <CheckoutForm />
        </div>
        <div className="sm:mb-12 md:mb-0">
          <ContactUs />
        </div>
      </main>
    </>
  );
}
