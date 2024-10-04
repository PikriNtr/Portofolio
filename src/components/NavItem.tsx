'use client'

import { PRODUCT_CATEGORIES } from '@/config'
import { Button } from './ui/button'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import HoverImageVideo from './HoverShikimori'
import HoverImageVideo2 from './HoverCar'
import HoverImageVideo3 from './HoverNianely'
import HoverImageVideo4 from './HoverYrlplyz'

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

  return (
    <div className='flex'>
      <div className='relative flex items-center'>
        <Button
          className='gap-1.5'
          onClick={handleOpen}
          variant={isOpen ? 'secondary' : 'ghost'}
        >
          <a className="font-medium text-base">Project</a>
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
            'absolute inset-x-0 top-full text-sm text-muted-foreground',
            {
              'animate-in fade-in-10 slide-in-from-top-5':
                !isAnyOpen,
            }
          )}
        >
          <div
            className='absolute inset-0 top-1/2 bg-white shadow'
            aria-hidden='true'
          />

          {/* The scrollable dropdown container */}
          <div className='relative bg-white py-10 max-h-[700px] overflow-y-auto'>
            <div className='mx-auto max-w-5xl px-8'>
              <div className='grid grid-cols-2 gap-x-8 gap-y-10 py-16'>
                <div className='col-span-4 col-start-1 grid grid-cols-3 gap-x-10 gap-y-10'>
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
                        className='mt-6 block font-medium text-gray-900'
                      >
                        Shikimori is not just a cutie
                      </Link>
                      <p className='mt-1' aria-hidden='true'>
                        Instagram
                        <br />
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
                      <div className='relative aspect-video overflow-hidden rounded-lg scale-[1.05px] bg-white group-hover:opacity-75 '>
                        <HoverImageVideo2 />
                      </div>

                      <Link
                        href='/'
                        className='mt-6 block font-medium text-gray-900'
                      >
                        Nissan GTR-34
                      </Link>
                      <p className='mt-1' aria-hidden='true'>
                        Instagram
                        <br />
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
                      <div className='relative aspect-video overflow-hidden rounded-lg scale-[1.05px] bg-white group-hover:opacity-75 '>
                        <HoverImageVideo3 />
                      </div>

                      <Link
                        href='/'
                        className='mt-6 block font-medium text-gray-900'
                      >
                        Nianely Intro2D
                      </Link>
                      <p className='mt-1' aria-hidden='true'>
                        Instagram
                        <br />
                        <br />
                        made with 
                        <br />
                        Adobe After Effect CC 2019
                      </p>
                      <p className='mt-0' aria-hidden='true'>
                        Special thanks to 
                        <a href='https://www.instagram.com/mevyx._/' className='text-blue-600'> Mevyx </a> 
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
                      <div className='relative aspect-video overflow-hidden rounded-lg scale-[1.05px] bg-white group-hover:opacity-75 '>
                        <HoverImageVideo4 />
                      </div>

                      <Link
                        href='/'
                        className='mt-6 block font-medium text-gray-900'
                      >
                        YRLPLYZ Intro3D
                      </Link>
                      <p className='mt-1' aria-hidden='true'>
                        Instagram
                        <br />
                        <br />
                        made with 
                        <br />
                        After Effects CC 2019 and CINEMA4D R-20
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
