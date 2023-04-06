import { useState } from "react";

import { BsPiggyBank } from "react-icons/bs";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { AiOutlineHome, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { useNavigate } from "react-router-dom";
import { MenuItem } from "../MenuItem/MenuItem";

export function Menu() {
  const [opened, setOpened] = useState(false);

  const navigate = useNavigate();

  const handleNavigate = (link: string) => {
    setOpened(false);
    navigate(link);
  };

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
        className={`animeOpenMenu pt-16 md:pt-28 p-2 bg-list-bg h-screen w-48 md:w-60 ${
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
            <MenuItem handleNavigate={() => handleNavigate("/home")}>
              Home
              <AiOutlineHome />
            </MenuItem>
            <MenuItem handleNavigate={() => handleNavigate("/entries")}>
              Entries
              <GiReceiveMoney />
            </MenuItem>
            <MenuItem handleNavigate={() => handleNavigate("/spents")}>
              Spents
              <GiPayMoney />
            </MenuItem>
            <MenuItem handleNavigate={() => handleNavigate("/piggybank")}>
              Piggy Bank
              <BsPiggyBank />
            </MenuItem>
          </ul>
        </nav>
      </aside>
    </>
  );
}
