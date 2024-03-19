import { BiMessageRounded } from "react-icons/bi";
import { BsStack } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { IoAddCircleOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
interface IMenu {
  name: string;
  icon: any;
}
export const menus: IMenu[] = [
  {
    name: "dashboard",
    icon: LuLayoutDashboard,
  },
  {
    name: "create new course",
    icon: IoAddCircleOutline,
  },
  {
    name: "my course",
    icon: BsStack,
  },
  {
    name: "earning",
    icon: MdOutlineAccountBalanceWallet,
  },
  {
    name: "message",
    icon: BiMessageRounded,
  },
  {
    name: "settings",
    icon: CiSettings,
  },
];
