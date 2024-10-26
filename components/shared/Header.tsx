'use client'
import Image from "next/image"
import Link from "next/link"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"
import { SOCIALS } from "@/constants"
import { usePathname } from 'next/navigation';
import Head from "next/head"
const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  return (
    <>
    <Head>
      <title>Special Campaign for Blinds Welfare (SCBW) Foundation</title>
      <meta name="description" content="Support the welfare of the visually impaired with SCBW Foundation. Join us in our mission to make a difference." />
    </Head>
    <header className={`${isHomePage ?  'lg:fixed bg-white' : null}  w-full border-b`}>
      <div className="flex items-center lg:justify-center ">
        <Link href="/" className="md:mx-2 ">
          <Image 
            src="/logo1.png" width={128} height={38}
            alt="SCBW Foundation logo" 
            objectFit="cover"
            className="rounded-lg"
          />
        </Link>
        <h1 className="hidden xl:block font-bold  xl:w-60 lg:mx-2">Special Campaign for <br /> Blind Welfare Foundation</h1>
             <ul className='regular-14 xl:flex gap-2 items-center  mx-auto hidden'>
                {SOCIALS.links.map((link) => (
                  <Link href={link.href} key={link.key} className='fill-current hover:bg-gray-200 transition duration-300 ease-in-out'>
                    <Image src={link.icon} alt={link.label} width={24} height={24}  />
                  </Link>
                ))}
             </ul>

        <nav className="md:flex flex-between hidden w-full max-w-xs lg:mx-80  ">
        <NavItems />
        </nav>     
        <div className="md:hidden">
        <MobileNav />
        </div>
      </div>
    </header>
    </>
  )
}

export default Header