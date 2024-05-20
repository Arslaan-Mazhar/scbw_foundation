import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
        <div className="flex justify-center mt-24 items-center h-screen">
        <Image 
            src="/img3.jpg" width={1000} height={800}
            alt="Website Under Construction Image" 
          />   
        </div>
    </main>
  );
}
