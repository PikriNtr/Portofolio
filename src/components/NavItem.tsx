'use client'

import { useState, useEffect } from 'react'
import { PRODUCT_CATEGORIES } from '@/config'
import { Button } from './ui/button'
import { ChevronDown, SunMoon } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import HoverImageVideo from './HoverShikimori'
import HoverImageVideo2 from './HoverCar'
import HoverImageVideo3 from './HoverNianely'
import HoverImageVideo4 from './HoverYrlplyz'
import HoverImageVideo5 from './HoverAnother'

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
                  {category.featured.map((item) => (
                    <div
                      onClick={() => close}
                      key={item.name}
                      className='group relative text-base sm:text-sm jus'
                    >
                      <div className='relative aspect-video overflow-hidden rounded-lg scale-[1.05px] bg-white group-hover:opacity-75 '>
                        <HoverImageVideo />
                      </div>

                      <Link
                        href='https://www.instagram.com/p/C0OTPihLtxl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
                        className='mt-6 block font-medium text-gray-900 dark:text-gray-200'
                      >
                        Shikimori is not just a cutie
                      </Link>
                      <p className='mt-1 dark:text-gray-400' aria-hidden='true'>
                        Instagram
                        <br />
                        made with 
                        <br />
                        Alight Motion
                      </p>
                    </div>
                  ))}

                  {category.featured.map((item) => (
                    <div
                    onClick={() => close}
                    key={item.name}
                    className='group relative text-base sm:text-sm jus'
                  >
                    <div className='relative aspect-video overflow-hidden rounded-lg scale-[1.05px] bg-white dark:bg-gray-900 group-hover:opacity-75 '>
                      <HoverImageVideo2 />
                    </div>

                    <Link
                      href='/'
                      className='mt-6 block font-medium text-gray-900 dark:text-gray-100'
                    >
                      Nissan GTR-34
                    </Link>
                    <p className='mt-1 dark:text-gray-300'>
                      Instagram
                      <br />
                      made with
                      <br />
                      Adobe After Effects CC 2019 and Alight Motion
                    </p>
                  </div>
                  ))}

                  {category.featured.map((item) => (
                    <div
                      onClick={() => close}
                      key={item.name}
                      className='group relative text-base sm:text-sm jus'
                    >
                      <div className='relative aspect-video overflow-hidden rounded-lg scale-[1.05px] bg-white dark:bg-gray-900 group-hover:opacity-75 '>
                        <HoverImageVideo3 />
                      </div>

                      <Link
                        href='/'
                        className='mt-6 block font-medium text-gray-900 dark:text-gray-100'
                      >
                        Nianely Intro2D
                      </Link>
                      <p className='mt-1 dark:text-gray-300'>
                        Instagram
                        <br />
                        made with
                        <br />
                        Adobe After Effect CC 2019
                      </p>
                      <p className='mt-0 dark:text-gray-300'>
                        Special thanks to{' '}
                        <a href='https://www.instagram.com/mevyx._/' className='text-blue-600 dark:text-blue-400'>
                          Mevyx
                        </a>{' '}
                        for helping
                      </p>
                    </div>
                  ))}

                  {category.featured.map((item) => (
                    <div
                      onClick={() => close}
                      key={item.name}
                      className='group relative text-base sm:text-sm jus'
                    >
                      <div className='relative aspect-video overflow-hidden rounded-lg scale-[1.05px] bg-white dark:bg-gray-900 group-hover:opacity-75 '>
                        <HoverImageVideo4 />
                      </div>

                      <Link
                        href='/'
                        className='mt-6 block font-medium text-gray-900 dark:text-gray-100'
                      >
                        YRLPLYZ Intro3D
                      </Link>
                      <p className='mt-1 dark:text-gray-300'>
                        Instagram
                        <br />
                        made with
                        <br />
                        After Effects CC 2019 and CINEMA4D R-20
                      </p>
                    </div>
                  ))}

                  {category.featured.map((item) => (
                    <div
                      onClick={() => close}
                      key={item.name}
                      className='group relative text-base sm:text-sm jus'
                    >
                      <div className='relative aspect-video overflow-hidden rounded-lg scale-[1.05px] bg-white dark:bg-gray-900 group-hover:opacity-75 '>
                        <HoverImageVideo5 />
                      </div>

                      <Link
                        href='/'
                        className='mt-6 block font-medium text-gray-900 dark:text-gray-100'
                      >
                        Story of My Life
                      </Link>
                      <p className='mt-1 dark:text-gray-300'>
                        Instagram
                        <br />
                        made with
                        <br />
                        After Effects CC 2019
                      </p>
                    </div>
                  ))}
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
