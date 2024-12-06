import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import GoogleMap from '@/components/ui/google-map';
import Head from "next/head";
const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Contact Us - SCBW Foundation</title>
        <meta
          name="description"
          content="Reach us  through our mobile Number or email us at SCBW Foundation, our mission, vision, and the impact we're making for the blind people."
        />
      </Head>
    <section className="bg-gray-100 p-10 rounded-xl ">
      <h1 className="text-3xl font-bold mb-10 text-center">Contact Us</h1>
      <div className="flex flex-col lg:flex-row justify-between md:items-center ">
        <p className="text-primary-500 hover:font-bold ">
          <b className="text-black">Address: </b> 3rd floor alsafa plaza near
          sadar police station Lalamusa, Gujrat, Pakistan.{" "}
        </p>
        <p className="text-primary-500 hover:font-bold">
          <b className="text-black">Phone No.: </b> +92-332-9292311
        </p>
        <p className="text-primary-500 hover:font-bold">
          <b className="text-black">Email Address: </b>{" "}
          scbfoundation92@gmail.com{" "}
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-7 justify-between items-center mt-6 bg-gray-100 ">
        <Card className="shadow-2xl  w-full lg:w-[42rem] border-2 border-gray-500  hover:border-gray-900">
          <CardHeader>
            <CardTitle className="text-center">Get in Touch</CardTitle>
            <CardDescription className="text-center">
              Do you have any questions?
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid gap-2">
              <Input id="name" placeholder="Your Name" />
            </div>
            <div className="grid gap-2">
              <Input id="Email" placeholder="Your Email" />
            </div>
            <div className="grid gap-2">
              <Input id="Subject" placeholder="Subject" />
            </div>
            <div className="grid gap-2">
              <Textarea placeholder="Type your message here." id="message-2" />
              <p className="text-sm text-muted-foreground">
                Your message will be copied to the support team.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="mx-auto p-6 transform hover:scale-105 transition-all duration-300">Send Message</Button>
          </CardFooter>
        </Card>
        <div className="w-full h-full border-2 border-gray-600 hover:border-gray-950  rounded-lg">
      <h1 className="absolute text-xl font-bold px-5">Our Location</h1>
      <GoogleMap />
    </div>
      </div>
    </section>
    </>
  );
};

export default ContactUs;
