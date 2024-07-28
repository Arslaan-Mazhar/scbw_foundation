'use client'
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"
import { SOCIALS } from "@/constants"
import { usePathname } from 'next/navigation';
const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  return (
    
    <header className={`${isHomePage ?  'lg:fixed bg-white' : null}  w-full border-b`}>
      <div className="flex items-center justify-center ">
        <Link href="/" className="xl:mx-2">
          <Image 
            src="/logo1.png" width={128} height={38}
            alt="SCBW Foundation logo" 
            objectFit="cover"
            className="rounded-lg"
          />
        </Link>
        <h1 className="font-bold  xl:w-60">Special Campaign for <br /> Blind Welfere Foundation</h1>
             <ul className='regular-14 xl:flex gap-2 items-center  mx-auto hidden'>
                {SOCIALS.links.map((link) => (
                  <Link href={link.href} key={link.key} className='fill-current hover:bg-gray-300 transition duration-300 ease-in-out'>
                    <Image src={link.icon} alt={link.label} width={24} height={24}  />
                  </Link>
                ))}
             </ul>

        <nav className="md:flex flex-between hidden w-full max-w-xs lg:mx-44  ">
        <NavItems />
        </nav>     
        <SignedIn>
       
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full pt-3 xl:mr-5 hidden lg:block" size="lg">
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
          </SignedOut>        
        </div>
        <div className="md:hidden">
        <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header