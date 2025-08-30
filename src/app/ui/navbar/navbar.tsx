import {Button} from '@heroui/button';
import Image from 'next/image';
import BurgerMenuSVG from '../../../../public/icons/burgerMenu.svg';
import SalusLogo from '../../../../public/icons/SalusLogo.svg';

import {Divider} from "@heroui/react";
import NavbarButton from "./navbarComponents/navbarButton";

import { TNavbarButtonProps } from "./types/types";

export default function Navbar({
  navbarButtons
}: TNavbarButtonProps) {

  return (
    <div className="min-h-[100%] w-[16.5rem] min-w-[16.5rem] bg-[rgba(30,30,30,0.9)] 
      rounded-2xl p-2 animate-softapper"
    >
      <div className="flex gap-4 items-center justify-between w-[100%]">
        <Button size="sm" radius="sm" 
          className="w-14 gap-0 px-3 min-w-11 max-w-11"
        >
          <Image src={BurgerMenuSVG} alt="Burger menu" width={20} height={20} unoptimized />
        </Button>
        <div className="flex gap-2 items-center justify-between pr-2">
          <div>Salus</div>
          <Image src={SalusLogo} alt="Salus logo" width={20} height={20} unoptimized />
        </div>
      </div>
      <Divider className="my-4" />
      <div className="flex flex-col gap-2">
        {navbarButtons.map((item) => {
          return <NavbarButton key={item.inscription} navbarButtonProp={item}/>
        })}
      </div>
    </div>
  )
}
