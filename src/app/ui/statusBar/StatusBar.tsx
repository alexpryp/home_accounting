import {Button} from '@heroui/button';
import { TStatusBarProps } from './types/types';

import SmallIconButton from "../buttons/SmallIconButton";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

import { Sun2Icon, UserCircleIcon } from "../icons/icons";

export default function StatusBar({
  header
}: TStatusBarProps) {
  return (
    <div className="flex gap-4 items-center justify-between w-[100%] h-[3rem] bg-[rgba(30,30,30,0.9)] p-2 rounded-2xl 
      animate-softapper"
    >
      <h1 className="text-lg leading-none ml-2 text-white">{header}</h1>
      <div className="flex gap-4">
        <ThemeSwitcher/>
        <SmallIconButton
          buttonWidth={"11"}
          iconWidth={"20"}
          iconHeight={"20"}
          imageSVG={Sun2Icon}
        />
        <Button size="sm" radius="sm" 
          className="w-11 gap-0 px-3 min-w-11 max-w-11"
        >
          <div className="text-sm/3.5">RU</div>
        </Button>
        <SmallIconButton
          buttonWidth={"11"}
          iconWidth={"20"}
          iconHeight={"20"}
          imageSVG={UserCircleIcon}
        />
      </div>
    </div>
  );
}