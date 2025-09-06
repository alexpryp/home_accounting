import { 
  HomeIcon,
  WalletIcon,
  CardTransferIcon,
  CalendarDateIcon,
  Banknote2Icon,
  MedalStarSquareIcon,
  ChartSquareIcon,

  SettingsIcon,
} from '../../icons/icons';

import { TNavbarButtonItem } from "../types/types";

export const navbarButtons: TNavbarButtonItem[] = [
  {
    imageSVG: HomeIcon,
    altText: "Main page icon",
    inscription: "Main",
    href: "/"
  },
  {
    imageSVG: WalletIcon,
    altText: "Accounts page icon",
    inscription: "Accounts",
    href: "/accounts"
  },
  {
    imageSVG: CardTransferIcon,
    altText: "Budget page icon",
    inscription: "Budget",
    href: "/budget"
  },
  {
    imageSVG: CalendarDateIcon,
    altText: "Calendar page icon",
    inscription: "Calendar",
    href: "/calendar"
  },
  {
    imageSVG: Banknote2Icon,
    altText: "Currencies page icon",
    inscription: "Currencies",
    href: "/currencies"
  },
  {
    imageSVG: MedalStarSquareIcon,
    altText: "Goals page icon",
    inscription: "Goals",
    href: "/goals"
  },
  {
    imageSVG: ChartSquareIcon,
    altText: "Reports page icon",
    inscription: "Reports",
    href: "/reports"
  },
]

export const settingButton: TNavbarButtonItem = {
  imageSVG: SettingsIcon,
  altText: "Settings page icon",
  inscription: "Settings",
  href: "/settings"
}
