import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
const About = () => {
  return (
    <section className="bg-gray-100 h-1/2 p-10" >
      <div className="flex flex-col gap-5 md:flex-row items-stretch">
        <div className="flex-none w-full md:w-1/2  md:h-full" >
          <Link href="/" >
            <Image
              src="/images/about-img.jpg"
              width={800}
              height={400}
              alt="About Us"
            />
          </Link>
        </div>
        <div className="flex-auto w-full md:w-1/2 md:h-full p-7 items-center justify-center  bg-slate-900">
           <h1 className="text-5xl text-white m-10">About Us</h1>
           <p className="text-gray-50 w-1/2 p-5 text-justify">Special Campaign for Blind Welfere (SCBW) foundation is charity based organization which is launched to serve the blind and under privileged people of our society who, by any reason, have been left behind in life. The aim of this organization is to equip the blinds with modern knowledge and to pave the way of education for them.Moreover, it's a committed movement for the welfare of the blind and introducing them to advanced technology and a bright future.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
