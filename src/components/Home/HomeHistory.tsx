import {  useState } from "react";
import { Card, WithdrawTable } from "..";
import cn from "../../utils/className";
import { FaCheckCircle } from "react-icons/fa";
import { payment } from "../../utils";

const HomeHistory = () => {
  const [selectedId, setSelectedId] = useState("1");

  return (
    <div className="flex gap-x-5">
      <div className="w-[50%]">
        <Card>
          <div className="px-2 py-3 border-b">
            <h4>Withdraw your money</h4>
          </div>
          <div className="px-2 py-4">
            <h3 className="text-xs pb-5 text-gray-500">Payment method</h3>

            <div className="space-y-5 pb-6">
              {payment.map((item) => (
                <PaymentMethod
                  key={item.id}
                  accNo={item.accNo}
                  date={item.date}
                  logo={item.logo}
                  name={item.name}
                  id={item.id}
                  isActive={selectedId === item.id}
                  isChecked={selectedId === item.id}
                  click={setSelectedId}
                />
              ))}
            </div>

            <div className="border-t w-full pt-5">
              <div className="flex justify-between items-center">
                <div>
                  <h1>$16,593.00</h1>
                  <span className="text-[10px] text-gray-400">
                    Current Balance
                  </span>
                </div>
                <div>
                  <button className="bg-orange-500 px-5 py-2 text-sm rounded-full text-white">
                    Withdraw Money
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className="w-3/5">
        <Card>
          <div className="px-2 py-3 border-b">
            <h4>Withdraw History</h4>
          </div>
          <WithdrawTable />
        </Card>
      </div>
    </div>
  );
};

const PaymentMethod = ({
  logo,
  accNo,
  date,
  name,
  isChecked,
  isActive = false,
  click,
  id,
}: {
  logo: string;
  accNo: string;
  date: string;
  name: string;
  isChecked?: boolean;
  id: string;
  isActive?: boolean;
  click: (id: string) => void;
}) => {
  return (
    <div
      className={cn(
        isActive && "border border-green-500",
        "border border-gray-200 rounded-full flex items-center justify-between py-2 px-3 cursor-pointer"
      )}
      onClick={() => click(id)}
    >
      <img src={logo} alt={name} className="w-7 h-5" />
      <p className="text-xs">{accNo}</p>
      <p className="text-xs">{date}</p>
      <p className="text-xs">{name}</p>
      {isChecked && <FaCheckCircle className="text-green-500" />}
    </div>
  );
};

export default HomeHistory;
