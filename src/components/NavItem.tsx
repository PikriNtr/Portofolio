'use client'

import { PRODUCT_CATEGORIES } from '@/config'
import { Button } from './ui/button'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import HoverImageVideo from './HoverShikimori'
import { ReactNode } from 'react'
import HoverImageVideo2 from './HoverCar'

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
  function item(value: { name: string; href: string; imageSrc: string }, index: number, array: { name: string; href: string; imageSrc: string }[]): ReactNode {
    throw new Error('Function not implemented.')
  }

  return (
    
    <div className='flex'>
      <div className='relative flex items-center'>
        <Button
          className='gap-1.5'
          onClick={handleOpen}
          variant={isOpen ? 'secondary' : 'ghost'}>
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
          )}>
          <div
            className='absolute inset-0 top-1/2 bg-white shadow'
            aria-hidden='true'
          />

          <div className='relative bg-white left-[50px]'>
            <div className='mx-auto max-w-7xl px-8'>
              <div className='grid grid-cols-4 gap-x-8 gap-y-10 py-16'>
                <div className='col-span-4 col-start-1 grid grid-cols-3 gap-x-8'>
                  {category.featured.map((item) => (
                    <div
                      onClick={() => close}
                      key={item.name}
                      className='group relative text-base sm:text-sm jus'>
                      <div className='relative aspect-video overflow-hidden rounded-lg scale-[1.05px] bg-white group-hover:opacity-75 '>
                        <HoverImageVideo />
                      </div>

                      <Link
                        href='/'
                        className='mt-6 block font-medium text-gray-900'>
                        Shikimori Edit
                      </Link>
                      <p
                        className='mt-1'
                        aria-hidden='true'>
                        Instagram
                      </p>
                    </div>
                  ))}
                </div>
                <div className='col-span-4 col-start-1 grid grid-cols-3 gap-x-8'>
                {category.featured.map((item) => (
                    <div
                      onClick={() => close}
                      key={item.name}
                      className='group relative text-base sm:text-sm jus'>
                      <div className='relative aspect-video overflow-hidden rounded-lg scale-[1.05px] bg-white group-hover:opacity-75 '>
                        <HoverImageVideo2 />
                      </div>

                      <Link
                        href='/'
                        className='mt-6 block font-medium text-gray-900'>
                        Car Edit
                      </Link>
                      <p
                        className='mt-1'
                        aria-hidden='true'>
                        Instagram
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