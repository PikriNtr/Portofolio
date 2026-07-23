'use client'

import { useState, useEffect } from 'react'
import { PRODUCT_CATEGORIES } from '@/config'
import { Button } from './ui/button'
import { ChevronDown, SunMoon } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import HoverVideoPlayer from './HoverVideoPlayer'

type Category = (typeof PRODUCT_CATEGORIES)[number]

interface NavItemProps {
  category: Category
  handleOpen: () => void
  close: () => void
  isOpen: boolean
  isAnyOpen: boolean
}

const NavItem = ({
  isAnyOpen,
  category,
  handleOpen,
  close,
  isOpen,
}: NavItemProps) => {

  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light'
    setIsDarkMode(theme === 'dark')
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  return (
    <div className='flex gap-x-3'>

      <div className='relative flex items-center'>
        <Button
          id='theme-button'
          onClick={toggleTheme}
          className='text-gray-500 dark:text-gray-500'
        >
          <SunMoon />
        </Button>
      </div>

      <div className='relative flex items-center'>
        <Button
          className='gap-1.5 bg-white'
          variant='default'
        >
          <a className="font-medium text-base p-1 text-black" href='https://paypal.me/PikriNtr'>Donate</a>
        </Button>
      </div>


      <div className='relative flex items-center'>
        <Button
          className='gap-1.5 bg-white'
          variant='default'
          onClick={handleOpen}
        >
          <a className="font-medium text-base p-1 text-black">Project</a>
          <ChevronDown
            className={cn(
              'h-4 w-4 transition-all text-muted-foreground',
              {
                '-rotate-180': isOpen,
              }
            )}
          />
        </Button>
      </div>

      {isOpen ? (
        <div
          onClick={() => close()}
          className={cn(
            'absolute inset-x-0 top-full text-sm text-muted-foreground dark:bg-gray-900' ,
            {
              'animate-in fade-in-10 slide-in-from-top-5 dark:bg-gray-900':
                !isAnyOpen,
            }
          )}
        >
          <div
            className='absolute inset-0 top-1/2 bg-white shadow dark:bg-[#161616]'
            aria-hidden='true'
          />

          {/* The scrollable dropdown container */}
          <div className='relative bg-white py-10 max-h-[100vh] overflow-y-auto no-scrollbar dark:bg-[#161616]'>
            <div className='mx-auto max-w-5xl px-8 dark:bg-[#161616]'>
              <div className='grid grid-cols-2 gap-x-8 gap-y-10 py-16'>
                <div className='col-span-4 col-start-1 grid grid-cols-3 gap-x-10 gap-y-10 dark:bg-[#161616]'>
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
                  <HoverVideoPlayer
                    thumbnailSrc="/nianely.jpg"
                    videoSrc="/nianely.mp4"
                    linkUrl="https://www.instagram.com/p/Cld_BYaPbY8"
                    title="Intro 2D Request"
                    software="Alight Motion and After Effect CC 2019"
                    description="Special thanks to Mevyx for helping me to make this intro"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default NavItem
