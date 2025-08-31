import HomeSVG from '../../../../../public/icons/Home.svg';
import WalletSVG from '../../../../../public/icons/Wallet.svg';
import CardTransfer from '../../../../../public/icons/CardTransfer.svg';
import CalendarDate from '../../../../../public/icons/CalendarDate.svg';
import Banknote2 from '../../../../../public/icons/Banknote2.svg';
import MedalStarSquare from '../../../../../public/icons/MedalStarSquare.svg';
import ChartSquare from '../../../../../public/icons/ChartSquare.svg';
import Settings from '../../../../../public/icons/Settings.svg';

import { TNavbarButtonItem } from "../types/types";

export const navbarButtons: TNavbarButtonItem[] = [
  {
    imageSVG: HomeSVG,
    altText: "Main page icon",
    inscription: "Main",
    href: "/"
  },
  {
    imageSVG: WalletSVG,
    altText: "Accounts page icon",
    inscription: "Accounts",
    href: "/accounts"
  },
  {
    imageSVG: CardTransfer,
    altText: "Budget page icon",
    inscription: "Budget",
    href: "/budget"
  },
  {
    imageSVG: CalendarDate,
    altText: "Calendar page icon",
    inscription: "Calendar",
    href: "/calendar"
  },
  {
    imageSVG: Banknote2,
    altText: "Currencies page icon",
    inscription: "Currencies",
    href: "/currencies"
  },
  {
    imageSVG: MedalStarSquare,
    altText: "Goals page icon",
    inscription: "Goals",
    href: "/goals"
  },
  {
    imageSVG: ChartSquare,
    altText: "Reports page icon",
    inscription: "Reports",
    href: "/reports"
  },
]

export const settingButton: TNavbarButtonItem = {
  imageSVG: Settings,
  altText: "Settings page icon",
  inscription: "Settings",
  href: "/settings"
}
