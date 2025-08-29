import {Button} from '@heroui/button';
import Image from 'next/image';
import BurgerMenuSVG from '../../../../public/icons/burgerMenu.svg';
import SalusLogo from '../../../../public/icons/SalusLogo.svg';

export default function Navbar() {
  return (
    <div className="min-h-[100%] w-[16.5rem] min-w-[16.5rem] bg-[rgba(30,30,30,0.9)] 
      rounded-2xl p-2 border border-[rgba(255,255,255,0.1)] animate-softapper"
    >
      <div className="flex gap-4 items-center justify-between w-[100%]">
        <Button size="md" radius="sm" isIconOnly>
          <Image src={BurgerMenuSVG} alt="Burger menu" />
        </Button>
        <div className="flex gap-2 items-center justify-between pr-2">
          <div>Salus</div>
          <Image src={SalusLogo} alt="Salus logo" />
        </div>
      </div>
    </div>
  )
}
