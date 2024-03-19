
import { Input } from "../Shared";
import { CiBellOn } from "react-icons/ci";
import PImg from "../../assets/img.jpeg";

const Nav = () => {
  return (
    <div className="border border-b-2 py-2 ">
      <div className="max-w-7xl px-32">
        <div className="flex justify-between">
          <div>
            <h4 className="text-xs text-gray-400">Good Morning</h4>
            <p className="text-sm font-semibold text-gray-500">Earning</p>
          </div>
          <div className="flex items-center gap-x-2">
            <Input />

            <div className="bg-gray-100 p-1 rounded-full">
              <CiBellOn size={30} className=" rounded-full" />
            </div>

            <img
              src={PImg}
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
