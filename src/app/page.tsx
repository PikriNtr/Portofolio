import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { CheckCircle, ArrowDownToLine, Video, Code, Airplay, Github } from "lucide-react";
import Link from "next/link";

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
  
  return (
    <>
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Fikri Haikal{' '}
          <span className="text-blue-600">
            (PikriNtr)
          </span>
          .
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">Ini cuman test doang</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href='https://github.com/PikriNtr' className={buttonVariants()}>Github Profile</Link>
          <button>This Project &rarr;</button>
        </div>
      </div>
    </MaxWidthWrapper>
  
  <section className='border-t border-gray-200 bg-gray-50'>
      <MaxWidthWrapper className='py-20'>
        <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
          {perks.map((perk) => (
            <div
              key={perk.name}
              className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
              <div className='md:flex-shrink-0 flex justify-center'>
                <div className='h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900'>
                  {<perk.Icon className='w-1/3 h-1/3' />}
                </div>
              </div>

              <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                <h3 className='text-base font-medium text-gray-900'>
                  {perk.name}
                </h3>
                <p className='mt-3 text-sm text-muted-foreground'>
                  {perk.description}
                </p>
            </div>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  </section>

  <footer className="py-10 px-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
  <MaxWidthWrapper>
    <div className="flex justify-between mt-10">
      <div>
        <h3 className="text-lg font-semibold mb-2">About</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:underline">Benefits</a></li>
          <li><a href="#" className="hover:underline">Partners</a></li>
          <li><a href="#" className="hover:underline">Team</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Social</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:underline">Facebook</a></li>
          <li><a href="#" className="hover:underline">Twitter</a></li>
          <li><a href="#" className="hover:underline">Instagram</a></li>
        </ul>
      </div>
    </div>
    <div className="mt-10 border-t border-gray-700 pt-10">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">PikriNtr</h3>
          <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div>
          <Link href='https://github.com/PikriNtr' className="text-white hover:text-gray-300">
            <Github size={24} />
          </Link>
        </div>
      </div>
    </div>
    </MaxWidthWrapper>
  </footer>
  </>
  );
}




//lagi stop di menit 44.00 (https://www.youtube.com/watch?v=06g6YJ6JCJU)
