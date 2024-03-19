import { AtmCard, Card, LineChart, Modal } from "..";
import { IoIosAddCircleOutline, IoIosArrowDown } from "react-icons/io";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";

const HomeStatistic = () => {
  const [open, setIsOpen] = useState(false);
 
  const [cards, setCards] = useState([
    {
      name: "john doe",
      cardNumber: "234567927383",
      expiry: "05/27",
      cvc: "568",
      bgcolor: "bg-indigo-800",
    },
  ]);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem("cards") || "[]");
    if (storedCards.length > 0) {
      setCards(storedCards);
    }
  }, [open]);


  const handleNextCard = () => {
    if (activeCardIndex < cards.length - 1) {
      setActiveCardIndex(activeCardIndex + 1);
    }
  };

  const handlePrevCard = () => {
    if (activeCardIndex > 0) {
      setActiveCardIndex(activeCardIndex - 1);
    }
  };

  return (
    <div>
      <div className="flex py-2 ">
        <div className="w-3/5 px-5">
          <Card styles="h-full">
            <div className="flex justify-between  border-b p-2.5">
              <div>
                <h4 className="">Statictics</h4>
              </div>
              <div className="flex items-center justify-between gap-x-1">
                <h6 className="text-gray-600 text-sm">Revenue</h6>
                <IoIosArrowDown className="text-gray-600" size={16} />
              </div>
            </div>
            <div className="mt-20">
              <LineChart />
            </div>
          </Card>
        </div>
        <div className="w-2/5">
          <Card styles="">
            <div className="flex justify-between  border-b p-2">
              <div>
                <h4>Cards</h4>
              </div>
              <div className="flex items-center justify-between gap-x-1">
                <h6 className="text-gray-600 text-sm">Revenue</h6>
                <IoIosArrowDown className="text-gray-600" size={16} />
              </div>
            </div>
            <div className="p-3">
              <AtmCard card={cards[activeCardIndex]} />
            </div>
            <div className="p-3">
              <div className="flex justify-between">
                <div className="flex gap-x-1">
                  {cards.map((_, i) => (
                    <div
                      className={`${
                        i === activeCardIndex
                          ? "bg-orange-500"
                          : "bg-orange-200"
                      } h-3 w-3 rounded-full`}
                    />
                  ))}
                </div>
                <div className="flex gap-x-2">
                  <FaArrowLeft
                    onClick={handlePrevCard}
                    className="text-gray-400 cursor-pointer"
                  />
                  <FaArrowRight
                    onClick={handleNextCard}
                    className="text-gray-700 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="p-3 cursor-pointer" onClick={() => setIsOpen(true)}>
              <div className="border-dashed border rounded- sm py-7 flex items-center justify-center">
                <h1 className="text-sm flex items-center gap-x-2">
                  <IoIosAddCircleOutline
                    size={20}
                    className="text-orange-500"
                  />
                  <span> Add new card</span>
                </h1>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <Modal isOpen={open} setIsOpen={setIsOpen}  cards={cards}/>
    </div>
  );
};

export default HomeStatistic;
