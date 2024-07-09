import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="bg-gray-100 h-1/2 p-10 rounded-xl" >
      <div className="flex flex-col  my-auto h-1/2 md:flex-row gap-2 items-stretch justify-center md: h-[29rem]">
        <div className="flex-none w-full md:w-1/2  " >
          <Link href="/"  >
            <Image
              src="/images/about-img.jpg"
              width={800}
              height={100}
              alt="About Us"
              className="rounded-xl md: h-full"
            />
          </Link>
        </div>
        <div className="flex-auto w-full md:w-1/2 md:h-full p-5 items-center justify-center text-center bg-slate-900 rounded-xl">
           <h1 className="text-5xl text-white m-5">About Us</h1>
           <p className="text-gray-50  p-5 text-justify">Special Campaign for Blind Welfere (SCBW) foundation is charity based organization which is launched to serve the blind and under privileged people of our society who, by any reason, have been left behind in life. The aim of this organization is to equip the blinds with modern knowledge and to pave the way of education for them.Moreover, it's a committed movement for the welfare of the blind and introducing them to advanced technology and a bright future.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
