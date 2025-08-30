import {Button} from '@heroui/button';
import Image from 'next/image';
import Sun2 from '../../../../public//icons/Sun2.svg';
import User from '../../../../public/icons/User.svg';
import { TStatusBarProps } from './types/types';

export default function StatusBar({
  header
}: TStatusBarProps) {
  return (
    <div className="flex gap-4 items-center justify-between w-[100%] h-[3rem] bg-[rgba(30,30,30,0.9)] p-2 rounded-2xl 
      animate-softapper"
    >
      <h1 className="text-lg leading-none ml-2">{header}</h1>
      <div className="flex gap-4">
        <Button size="sm" radius="sm" 
          className="w-14 gap-0 px-3 min-w-11 max-w-11"
        >
          <Image src={Sun2} alt="Sun icon" width={20} height={20} />
        </Button>
        <Button size="sm" radius="sm" 
          className="w-14 gap-0 px-3 min-w-11 max-w-11"
        >
          <div className="text-sm/3.5">RU</div>
        </Button>
        <Button size="sm" radius="sm" 
          className="w-14 gap-0 px-3 min-w-11 max-w-11"
        >
          <Image src={User} alt="User icon" width={20} height={20} />
        </Button>
      </div>
    </div>
  );
}