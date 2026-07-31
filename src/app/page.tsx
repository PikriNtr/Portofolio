
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import HoverVideoPlayer from "@/components/HoverVideoPlayer";




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
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl left-[-50px] dark:text-white">
        My Project
      </h1>
      <p className="text-gray-900 font-normal ml-1 mt-[10px] text-2xl dark:text-white">
        Some of my project that I made
      </p>
    </div>
    <div className="mt-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <HoverVideoPlayer
          thumbnailSrc="/nianely.jpg"
          videoSrc="/nianely.mp4"
          linkUrl="https://www.instagram.com/p/Cld_BYaPbY8"
          title="Nianely"
          software="Alight Motion"
          description="Intro 2D"
        />
        <HoverVideoPlayer
          thumbnailSrc="/shikimori.png"
          videoSrc="/shikimori.mp4"
          linkUrl="https://www.instagram.com/p/Cld_BYaPbY8"
          title="AMV Shikimori"
          software="After Effect CC 2019"
          description="Really love Shikimori, so i make this AMV"
        />
        <HoverVideoPlayer
          thumbnailSrc="/yrlplyz.png"
          videoSrc="/yrlplyz.mp4"
          linkUrl="https://www.instagram.com/p/Cld_BYaPbY8"
          title="2.5D Intro Request"
          software="Cinema 4D and After Effect CC 2019"
          description="First 2.5 Intro"
        />
        <HoverVideoPlayer
          thumbnailSrc="/caredit.jpg"
          videoSrc="/caredit.mp4"
          linkUrl="https://www.instagram.com/p/Cld_BYaPbY8"
          title="Nissan GTR R34"
          software="Alight Motion"
          description="First Car Edit"
        />
        <HoverVideoPlayer
          thumbnailSrc="/feb.png"
          videoSrc="/feb.mp4"
          linkUrl="https://www.instagram.com/p/Cld_BYaPbY8"
          title="Something"
          software="After Effect CC 2019"
          description="Something idk"
        />
      </div>
    </div>
  </MaxWidthWrapper>
</section>


</>;
}




//lagi stop di menit 44.00 (https://www.youtube.com/watch?v=06g6YJ6JCJU)
