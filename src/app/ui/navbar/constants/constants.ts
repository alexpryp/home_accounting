import HomeSVG from '../../../../../public/icons/Home.svg';
import WalletSVG from '../../../../../public/icons/Wallet.svg';
import CardTransfer from '../../../../../public/icons/CardTransfer.svg';
import CalendarDate from '../../../../../public/icons/CalendarDate.svg';
import Banknote2 from '../../../../../public/icons/Banknote2.svg';

import { TNavbarButtonItem } from "../types/types";

export const navbarButtons: TNavbarButtonItem[] = [
  {
    imageSVG: HomeSVG,
    altText: "Main page icon",
    inscription: "Main"
  },
  {
    imageSVG: WalletSVG,
    altText: "Accounts page icon",
    inscription: "Accounts"
  },
  {
    imageSVG: CardTransfer,
    altText: "Budged page icon",
    inscription: "Budged"
  },
  {
    imageSVG: CalendarDate,
    altText: "Calendar page icon",
    inscription: "Calendar"
  },
  {
    imageSVG: Banknote2,
    altText: "Currencies page icon",
    inscription: "Currencies"
  },
]
