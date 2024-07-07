import Image from "next/image"
import Link from "next/link"

const page = () => {
    return (
      <section className="bg-gray-100 h-1/2 p-10 rounded-xl" >
        <div className="flex flex-col gap-3 md:flex-row items-stretch justify-center">
          <div className="flex-none w-full md:w-1/2  md:h-full">
          <Link href="/"  >
            <Image
              src="/images/p1.jpg"
              width={800}
              height={400}
              alt="About Us"
              className="rounded-xl"
            />
          </Link>
          <h1></h1>
          <p></p>
          </div>
          <div className="flex-none w-full md:w-1/2  md:h-full">
          <Link href="/"  >
            <Image
              src="/images/p1.jpg"
              width={800}
              height={400}
              alt="About Us"
              className="rounded-xl"
            />
          </Link>
          <h1></h1>
          <p></p>
          </div>
        </div>
      </section>
    )
  }
  
  export default page