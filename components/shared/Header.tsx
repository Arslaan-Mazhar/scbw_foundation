"use client";
import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import { SOCIALS } from "@/constants";
import { usePathname } from "next/navigation";
import Head from "next/head";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
const Header = () => {
  const router = useRouter();
  const handleDonateClick = () => {
    router.push("/safePayCheckoutForm"); // Navigate to the CheckoutForm page
  };
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  return (
    <>
      <Head>
        <title>Special Campaign for Blinds Welfare (SCBW) Foundation</title>
        <meta
          name="description"
          content="Support the welfare of the visually impaired with SCBW Foundation. Join us in our mission to make a difference."
        />
      </Head>
      <header
        className={` animate-fade-in ${
          isHomePage ? "lg:fixed bg-white" : null
        }  w-full border-b`}
      >
        <div className="flex md:items-center justify-between md:py-1 md:mb-3 rounded-full bg-blue-100">
          <Link href="/" className=" md:32  ">
            <Image
              src="/logo1.png"
              width={128}
              height={38}
              alt="SCBW Foundation logo"
              objectFit="cover"
              className="rounded-full "
            />
          </Link>
          <h1 className="hidden xl:block font-bold   lg:mx-6 animate-pulse">
            Special Campaign for Blind Welfare Foundation
          </h1>
          <ul className="regular-14  xl:flex w-36 gap-1  items-center mx-auto hidden  ">
            {SOCIALS.links.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="fill-current hover:bg-gray-300 p-2 rounded-full transition duration-300"
              >
                <Image
                  src={link.icon}
                  alt={link.label}
                  width={24}
                  height={24}
                  className="hover:scale-110 transition-transform"
                />
              </Link>
            ))}
          </ul>

          <nav className="md:flex items-center justify-end gap-x-6 hidden w-full max-w-lg lg:mx-40">
            <NavItems />
          </nav>
          <Button
            onClick={handleDonateClick}
            className="lg:flex items-center justify-end hidden mx-auto bold px-4 py-4 text-white bg-blue-600 rounded shadow transform hover:scale-105 transition-all duration-300"
          >
            Donate Online
          </Button>
          <div className="lg:hidden m-7">
            <MobileNav />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
