import {Button} from '@heroui/button';
import Image from 'next/image';
import BurgerMenuSVG from '../../public/icons/burgerMenu.svg';
import Sun2 from '../../public/icons/Sun2.svg';
import User from '../../public/icons/User.svg';

export default function Home() {
  return (
    <>
      <div className="flex gap-4 items-center justify-between w-[100%] h-[3.5rem] bg-[rgba(30,30,30,0.9)] p-2 rounded-2xl 
        animate-softapper border border-[rgba(255,255,255,0.1)]"
      >
        <h1 className="text-lg leading-none ml-2">Main</h1>
        <div className="flex gap-4">
          <Button size="md" radius="sm" isIconOnly>
            <Image src={Sun2} alt="Sun icon" />
          </Button>
          <Button size="md" radius="sm" isIconOnly>
            <div>RU</div>
          </Button>
          <Button size="md" radius="sm" isIconOnly>
            <Image src={User} alt="User icon" />
          </Button>
        </div>
      </div>
    </>
  );
}
