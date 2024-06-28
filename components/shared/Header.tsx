import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"
const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="flex items-center justify-between">
        <Link href="/" className="md:mx-10 w-36">
          <Image 
            src="/logo1.png" width={128} height={38}
            alt="SCBW Foundation logo" 
          />
        </Link>
        <h1 className="font-bold w-full ml-4">Special Campaign for <br /> Blind Welfere Foundation</h1>

        <nav className="md:flex flex-between hidden w-full max-w-xs mr-16">
        <NavItems />
        </nav>     
        <SignedIn>
       
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full mr-5" size="lg">
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