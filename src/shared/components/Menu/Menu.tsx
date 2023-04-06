import { useState } from "react";

import { BsPiggyBank } from "react-icons/bs";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { AiOutlineHome, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export function Menu() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpened(true)}
        className={` ${
          opened ? "hidden" : "fixed"
        } md:hidden right-10 bottom-20 z-50 bg-item-bg p-2 rounded-full shadow-sm`}
      >
        <AiOutlineMenu />
      </button>
      <aside
        className={`pt-20 md:pt-28 p-2 bg-list-bg h-screen w-48 md:w-60 ${
          opened ? "block" : "hidden"
        } md:block z-40`}
      >
        <div className="p-4 flex flex-col gap-3">
          <button
            onClick={() => setOpened(false)}
            className="block md:hidden self-end bg-item-bg p-2 rounded-full shadow-sm"
          >
            <AiOutlineClose />
          </button>
          <p className="text-xl font-semibold text-center">
            Good <span className="text-secondary-color">something</span>
          </p>
        </div>
        <nav className="p-5">
          <ul className="flex flex-col gap-4 items-center">
            <li>
              <button className="py-2 px-5 bg-item-bg rounded-lg w-36 md:w-44 flex items-center gap-2 justify-between text-sm md:text-base">
                Home
                <AiOutlineHome />
              </button>
            </li>
            <li>
              <button className="py-2 px-5 bg-item-bg rounded-lg w-36 md:w-44 flex items-center gap-2 justify-between text-sm md:text-base">
                Entries
                <GiReceiveMoney />
              </button>
            </li>
            <li>
              <button className="py-2 px-5 bg-item-bg rounded-lg w-36 md:w-44 flex items-center gap-2 justify-between text-sm md:text-base">
                Spents
                <GiPayMoney />
              </button>
            </li>
            <li>
              <button className="py-2 px-5 bg-item-bg rounded-lg w-36 md:w-44 flex items-center gap-2 justify-between text-sm md:text-base">
                Piggy Bank
                <BsPiggyBank />
              </button>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
