import { Button } from '@heroui/button';
import Image from 'next/image';

import { TNavbarButtonPropItem } from '../types/types';

export default function NavbarButton({
  navbarButtonProp 
}: TNavbarButtonPropItem) {
  return (
    <Button size="sm" radius="sm" className='flex items-center bg-transparent hover:bg-default'>
      <div className="flex items-center gap-4 w-[100%] ">
        <Image 
          src={navbarButtonProp.imageSVG} 
          alt={navbarButtonProp.altText} 
          width={20} 
          height={20}
          unoptimized
        />
        <div className="text-base">{navbarButtonProp.inscription}</div>
      </div>
    </Button>
  )
}