import Head from "next/head";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us - SCBW Foundation</title>
        <meta
          name="description"
          content="Learn more about SCBW Foundation, our mission, vision, and the impact we're making for the visually impaired."
        />
      </Head>
      <section className="bg-gray-100 p-10 rounded-xl ">
        <div className="flex flex-col w-full xl:flex-row gap-4  min-h-80 items-center justify-center ">
          <div className="w-full xl:w-1/2  xl:  h-full">
              <Image
                src="/images/about-img.jpg"
                width={900}
                height={600}
                alt="About Us"
                className="rounded-xl h-[41.5rem] hidden xl:block"
              />
          </div>
          <div className="w-full xl:w-3/4 xl:h-[41.5rem] bg-slate-900 rounded-xl">
            <h1 className="text-5xl text-white m-5 text-center">About Us</h1>
            <p className="text-gray-50   text-justify lg:text-3xl xl: p-10">
              Special Campaign for Blind Welfere (SCBW) foundation is charity
              based organization which is launched to serve the blind and under
              privileged people of our society who, by any reason, have been
              left behind in life. The aim of this organization is to equip the
              blinds with modern knowledge and to pave the way of education for
              them.Moreover, it's a committed movement for the welfare of the
              blind and introducing them to advanced technology and a bright
              future.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 p-10 rounded-xl " >
        <h1 className="text-4xl text-center mb-5 font-bold">Action Plan</h1>
        <div className="flex flex-col gap-3 md:flex-row items-stretch justify-center ">
          <div className="p-3 w-full md:w-1/2  bg-white border border-gray-500 rounded-lg shadow-2xl  hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <Image
              src="/images/p1.jpg"
              width={400}
              height={200}
              alt="About Us"
              className="rounded-xl mx-auto"
            />
          <h1 className="text-2xl text-center">Established</h1>
          <p className="text-justify">Special Campaign for Blind Welfare Foundation established in June 2022. Its main office is situated in GT road Kharian(Gujrat). The main aim of this institution is to work for the betterment of visually impaired people, introduce modern technological education to them, and guide them in their education purposes. </p>
          </div>
          <div className="p-5 w-full md:w-1/2  bg-white  md:h-full border border-gray-500 rounded-lg shadow-2xl hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <Image
              src="/images/p2.jpg"
              width={400}
              height={200}
              alt="About Us"
              className="rounded-xl mx-auto h-[16.7rem]"
            />
          <h1 className="text-2xl text-center">Present Work</h1>
          <p className="text-justify font-serif">A computer lab has been set up. In which computer courses are conducted time to time. Apart from this, this organization takes into account the needs of the blind individual and provides orientation in different languages and other courses are being conducted.</p>
          </div>
        </div>
      <div className="flex flex-col gap-3 md:flex-row items-stretch justify-center my-5 lg:h-[27rem]">
        <div className="flex-none w-full hidden xl:block xl:w-1/3 " >
            <Image
              src="/images/p4.jpg"
              width={800}
              height={100}
              alt="About Us"
              className="rounded-xl xl:h-[27rem]"
            />
        </div>
        <div className="flex-auto w-full xl:w-3/4 xl:h-full p-5 bg-white items-center justify-center text-center rounded-xl border border-gray-500 rounded-lg shadow-2xl  hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
           <h1 className="text-5xl">Future of Work</h1>
           <p className="p-5 text-justify ">To introduce with modern technology means training of visually impaired students of comprehending Urdu (text to speech) For Android & Computers, and different software developing is done. Braille, from which visually impaired students can read, we are teaching Duxbury (modern Braille) to visually impaired students and converting many books for the accessibility of the visually impaired students on Braille. We want to educate those visually impaired students who stuck at homes and cannot go out for getting good opportunities of education. With the help of Allah Almighty, our vision is to educate them, and make high school and college for these students, and hostel facilities will also be provided. Moreover, those students who could not get education, we can start program for improving their skills, and arrange seminars for their development. Through these training,courses,and seminars, the illiterate visually impaired students can also learn and use their skills for earning money for them. We will try to arrange online courses for the outsiders who could not easily come from far places. Therefore, we will try our best to find out suitable solutions for visually impaired students' problems in order to help them and provide guidance for their education and future development.

</p>
        </div>
      </div>

    </section>
    </>
  );
};

export default About;
