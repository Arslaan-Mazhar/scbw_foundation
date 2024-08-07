import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="bg-gray-100 p-10 rounded-xl " >
      <div className="flex flex-col w-full xl:flex-row gap-4  min-h-80 items-center justify-center ">
        <div className="w-full xl:w-1/2  xl:  h-full" >
          <Link href="/"  >
            <Image
              src="/images/about-img.jpg"
              width={900}
              height={600}
              alt="About Us"
              className="rounded-xl h-[41.5rem] hidden xl:block"
            />
          </Link>
        </div>
        <div className="w-full xl:w-3/4 xl:h-[41.5rem] bg-slate-900 rounded-xl">
           <h1 className="text-5xl text-white m-5 text-center">About Us</h1>
           <p className="text-gray-50   text-justify lg:text-3xl xl: p-10">Special Campaign for Blind Welfere (SCBW) foundation is charity based organization which is launched to serve the blind and under privileged people of our society who, by any reason, have been left behind in life. The aim of this organization is to equip the blinds with modern knowledge and to pave the way of education for them.Moreover, it's a committed movement for the welfare of the blind and introducing them to advanced technology and a bright future.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
