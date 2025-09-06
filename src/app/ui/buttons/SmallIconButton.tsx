'use client'

import { Button } from '@heroui/button';

import { TSmallIconButtonPtops } from './types';

export default function SmallIconButton({
  buttonWidth = "11",
  iconWidth = "24",
  iconHeight = "24",
  imageSVG
}: TSmallIconButtonPtops) {
  const Icon = imageSVG;
  return (
    <Button size={"sm"} radius="sm" 
      className={`w-${buttonWidth} gap-0 px-3 min-w-${buttonWidth} max-w-${buttonWidth}`}
    >
      <Icon width={iconWidth} height={iconHeight}/>
    </Button>
  )
}
