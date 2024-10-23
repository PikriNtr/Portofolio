import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { CheckCircle, ArrowDownToLine, Video, Code, Airplay, Github } from "lucide-react";
import Link from "next/link";
import AllProject from "./AllProject";
import Navbar from "@/components/Navbar";

const perks = [
  {
    name: 'Device',
    Icon: Airplay,
    description: "im using Laptop for coding and editing. I also use smartphone for testing and debugging mobile application.",
  },
  {
    name: 'Programming Language',
    Icon: Code,
      description: "I can use Javascript, Typescript for programming language. Still Learning on Python and C++. I also can use React, Next.js, and Flutter little bit for building web and mobile application. I also can use Node.js for backend development."
    },
    {
      name: 'Editing Software',
      Icon: Video,
      description: "Im using Adobe After Effect, Adobe Premiere Pro, and Alight Motion for video editing. I also use Adobe Photoshop (little bit) for photo editing. Iam also using Figma for UI/UX Design and FL Studio for music production.",
  }
]

export default function Home() {
  
  return <>
  <MaxWidthWrapper>
    <div className="mt-40 dark:bg-[#161616] dark:text-white">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl left-[-50px] dark:text-white">
        Fikri Haikal{' '}
        <span className="text-blue-600">
          (PikriNtr)
        </span>
        .
      </h1>
      <p className="text-gray-900 font-normal ml-1 mt-[10px] text-2xl dark:text-white">
        wasting time to code/game
      </p>
    </div>
    <div className="py-[150px] mt-[-120px] max-w-3xl dark:bg-[#161616]">
    <p className=" text-lg max-w-prose text-muted-foreground">code JS. learning C++, Ruby and play osu!</p>
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <Link href='https://github.com/PikriNtr' className={`w-1/3 sm:w-auto ${buttonVariants()}`}>Github Profile</Link>
        {/* <AllProject /> */}
        <Link href="https://github.com/PikriNtr/Portofolio" className={`w-1/3 sm:w-auto ${buttonVariants()}`}>
        This Project &rarr;
        </Link>
      </div>
    </div>
  </MaxWidthWrapper>

<section className="dark:bg-[#161616]">
  <MaxWidthWrapper>
    <div className="mt-72">
      <h1></h1>
    </div>
  </MaxWidthWrapper>
</section>

<section className="dark:bg-[#161616] ">
  <MaxWidthWrapper className="py-[150px]">
    <div className="flex flex-col items-center justify-center py-10 sm:grid-cols-2 sm:gap-x-6 sm:text-center md:text-center dark:bg-[#161616]">
      <h1 className="text-2xl font-semibold mb-8 sm:text-center md:text-center">
        Thanks to this tools/framework/library that powered this web
      </h1>
      <div className="flex-col items-center justify-center grid grid-cols-4 gap-4">
        <div className="flex items-center justify-center p-4">
          <a href="https://github.com">
            <img 
            src="/github.png" 
            alt="Github logo" 
            className="mix-blend-multiply"
            />
          </a>
        </div>
        <div className="flex items-center justify-center p-4">
          <a href="https://nextjs.org">
            <img 
            src="/nextjslogo.png" 
            alt="NextJS logo" 
            className="mix-blend-multiply"
            />
          </a>
        </div>
        <div className="flex items-center justify-center p-4">
          <a href="https://tailwindcss.com">
            <img 
            src="/tailwind.png" 
            alt="Taiwlind logo" 
            className="mix-blend-multiply"
            />
          </a>
        </div>
        <div className="flex items-center justify-center p-4">
          <a href="https://vercel.com">
            <img 
            src="/vercellogo.png" 
            alt="Vercel logo"
            className="dark:contrast-200" 
            />
          </a>
        </div>
      </div>
    </div>
  </MaxWidthWrapper>
</section>

</>;
}




//lagi stop di menit 44.00 (https://www.youtube.com/watch?v=06g6YJ6JCJU)
