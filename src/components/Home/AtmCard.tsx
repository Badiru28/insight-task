import { LuCopy } from "react-icons/lu";
import Visa from "../../assets/visa.png";
import cn from "../../utils/className";

const AtmCard = ({ card }: any) => {
  if (!card) return null; 

  const { cardNumber, expiry, name, bgcolor } = card;
  const firstFourDigits = cardNumber?.slice(0, 4);

  

  return (
    <div
      className={cn(
        bgcolor,
        "px-3 py-5 space-y-6 shadow-lg  shadow-purple-300"
      )}
    >
      <div className="flex justify-between items-center text-white">
        <img src={Visa} alt="visa card" className="w-20 h-10" />
        <p>...</p>
      </div>
      <div className="text-white flex items-center gap-x-5">
        <h3 className="tracking-widest">{`${firstFourDigits} **** **** ****`}</h3>
        <LuCopy />
      </div>

      <div className="flex gap-x-32 items-cente text-white">
        <div>
          <h6 className="text-xs text-gray-100/60">Expires</h6>
          <p className="text-xs text-white">{expiry}</p>
        </div>

        <div>
          <h6 className="text-xs text-gray-100/60">Card Name</h6>
          <p className="text-xs text-white">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default AtmCard;
