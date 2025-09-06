'use client'

import { useState } from 'react';
import { Button } from '@heroui/button';
import { Divider } from "@heroui/react";
import Image from 'next/image';
import clsx from 'clsx';

import SalusLogo from '../../../../public/icons/SalusLogo.svg';
import { HamburgerMenuIcon } from '../icons/icons';

import NavbarButton from "./navbarComponents/navbarButton";

import { TNavbarButtonProps } from "./types/types";

export default function Navbar({
  navbarButtons,
  settingButton
}: TNavbarButtonProps) {
  const [navbarOpen, setNavbarOpen] = useState(true);

  const navbarOpenHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className={clsx(
        'min-h-[100%] w-[3.75rem] min-w-[3.75rem] bg-[rgba(30,30,30,0.9)] rounded-2xl p-2 animate-softapper overflow-hidden',
        { 'w-[16.5rem] min-w-[16.5rem]': navbarOpen === true,}
      )}
    >
      <div className="flex gap-4 items-center justify-between w-[100%]">
        <Button size="sm" radius="sm" 
          className="w-14 gap-0 px-3 min-w-11 max-w-11"
          onPress={navbarOpenHandler}
        >
          <HamburgerMenuIcon width={"20"} height={"20"} fill={"white"}/>
        </Button>
        { navbarOpen
            ? (<div className="flex gap-2 items-center justify-between pr-2">
                <div>Salus</div>
                <Image src={SalusLogo} alt="Salus logo" width={20} height={20} unoptimized />
              </div>)
            : null
        }
      </div>
      <Divider className="my-4" />
      <div className="flex flex-col gap-2">
        {/* {navbarButtons.map((item) => {
          return (
            <NavbarButton 
              key={item.inscription} 
              navbarButtonProp={item}
              navbarOpen={navbarOpen}
            />
          )
        })} */}
        {navbarButtons.map((item) => {
          return (
            <NavbarButton 
              key={item.inscription}
              navbarButtonProp={item}
              navbarOpen={navbarOpen}
            />
          )
        })}
      </div>
      <Divider className="my-4" />
      <NavbarButton 
        key={settingButton.inscription} 
        navbarButtonProp={settingButton}
        navbarOpen={navbarOpen}
      />
    </div>
  )
}
