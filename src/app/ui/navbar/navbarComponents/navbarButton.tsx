'use client'

import { Button } from '@heroui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import { TNavbarButtonPropItem } from '../types/types';

export default function NavbarButton({
  navbarButtonProp,
  navbarOpen = true
}: TNavbarButtonPropItem) {
  const pathname = usePathname();

  const Icon = navbarButtonProp.imageSVG;

  return (
    <Button 
      as={Link} 
      href={navbarButtonProp.href} 
      size="sm" 
      radius="sm" 
      className={clsx(
        'flex items-center relative bg-transparent hover:bg-default',
        { 'bg-default': pathname === navbarButtonProp.href },
        { 'w-11 max-w-11 min-w-11': navbarOpen === false },
      )}
    >
      <div className="flex items-center gap-4 w-[100%] ">
        {
          pathname === navbarButtonProp.href 
            ? (<div className='absolute left-0 rounded-[0.125rem] w-[0.125rem] 
                h-[1.25rem] border border-[#17C964] animate-softapper'
              />)
            : null
        }
        <Icon width={"20"} height={"20"}/>
        {navbarOpen
          ? (<div className="text-base">{navbarButtonProp.inscription}</div>)
          : null
        }
      </div>
    </Button>
  )
}