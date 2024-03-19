import { Dialog, Transition } from "@headlessui/react";
import { Dispatch, Fragment, SetStateAction, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { CiCreditCard1 } from "react-icons/ci";

type Card = {
  name: string;
  expiry: string;
  cardNumber: string;
  bgcolor: string;
};

interface MovieCardProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  cards: Card[];
}

const Modal = ({ isOpen, setIsOpen, cards }: MovieCardProps) => {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  const closeModal = () => {
    setIsOpen(false);
  };

  const generateRandomColor = () => {
    const colors = [
      "bg-purple-500",
      "bg-red-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
  };

  const saveCard = () => {
    const newCard = {
      name,
      cardNumber,
      expiry,
      cvc,
      bgcolor: generateRandomColor(),
    };

    localStorage.setItem("cards", JSON.stringify([...cards, newCard]));

    // Clear input fields
    setName("");
    setCardNumber("");
    setExpiry("");
    setCvc("");

    // Close modal
    closeModal();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="relative max-w-5xl space-y-5 transform overflow-hidden rounded bg-white py-5 px-7 text-left align-middle shadow transition-all">
              <div className="border-b py-2 flex items-center justify-between">
                <h4>New Payment Card</h4>
                <IoIosClose
                  onClick={closeModal}
                  size={25}
                  className="text-gray-400 cursor-pointer"
                />
              </div>
              <div className="mb-4 mt-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name on card"
                  className="mt-1 rounded-full block w-full px-3 py-2 border border-gray-300 placeholder:text-gray-200  shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="cardNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Card Number
                </label>
                <div className="mt-1 flex rounded-full shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-full border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    <CiCreditCard1 className="text-yellow-400" />
                  </span>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="Label"
                    className="flex-1 block w-full px-3 py-2 border placeholder:text-gray-200 border-gray-300 rounded-none rounded-r-full shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex gap-x-5 w-full">
                <div className="w-1/2">
                  <label
                    htmlFor="expiry"
                    className="block text-sm font-medium text-gray-700"
                  >
                    MM/YY
                  </label>
                  <input
                    type="text"
                    id="expiry"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    placeholder="MM/YY"
                    name="expiry"
                    className="mt-1 rounded-full placeholder:text-gray-200 block w-full px-3 py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="cvc"
                    className="block text-sm font-medium text-gray-700"
                  >
                    CVC
                  </label>
                  <input
                    type="text"
                    id="cvc"
                    name="cvc"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    placeholder="Security Code"
                    className="mt-1 block w-full px-3 py-2 placeholder:text-gray-200 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  className="rounded-full bg-gray-200 px-4 py-1"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-yellow-400 px-5 rounded-full py-2 text-white"
                  onClick={saveCard}
                >
                  Add Card
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
