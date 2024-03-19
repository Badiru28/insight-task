import { BsStack } from "react-icons/bs";
import { CiCreditCard1 } from "react-icons/ci";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { PiCrownThin } from "react-icons/pi";

export const stats = [
  {
    color: "bg-orange-100",
    icon: BsStack,
    header: "$13,804.00",
    subHeader: "Total Revenue",
    fillColor: "fill-orange-500",
  },
  {
    color: "bg-purple-100",
    icon: MdOutlineAccountBalanceWallet,
    header: "$16,704.00",
    subHeader: "Current Balance",
    fillColor: "fill-purple-500",
  },
  {
    color: "bg-red-100",
    icon: CiCreditCard1,
    header: "$13,904.00",
    subHeader: "Total Withdrawers",
    fillColor: "fill-red-500",
  },

  {
    color: "bg-green-100",
    icon: PiCrownThin,
    header: "$608.00",
    subHeader: "Today Revenue",
    fillColor: "fill-green-500",
  },
];
