import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
        <div className="flex-center ml-60 min-h-screen w-full bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
        <Image 
            src="/img3.jpg" width={1000} height={800}
            alt="Website Under Construction Image" 
          />   
        </div>
    </main>
  );
}
