import { Link } from "react-router-dom";

import { MdShortcut } from "react-icons/md";

import { MenuListItem } from "../";

import { MenuListType } from "./MenuList.types";

export function MenuList({ type, items, loading }: MenuListType) {
  return (
    <div className="w-full md:w-[50%] h-[230px] md:h-[300px] max-h-[300px] bg-list-bg dark:bg-zinc-200 rounded-xl p-2 md:p-5 relative transition-colors">
      <Link
        to={`/${type === "entry" ? "entries" : "spents"}`}
        className="absolute -top-10 font-semibold text-xl left-2 flex items-center gap-1"
      >
        {type === "entry" ? "Entries" : "Spents"}
        <MdShortcut className="fill-secondary-color" />
        <span className="text-[10px] text-gray-300 dark:text-black">
          (click here)
        </span>
      </Link>
      <div className="flex flex-col gap-3 overflow-y-auto h-full">
        {loading ? (
          <span className="text-center pt-20 text-2xl text-gray-600 block">
            Loading....
          </span>
        ) : items && items.length > 0 ? (
          items.map((item) => (
            <MenuListItem
              key={item.id}
              date={item.createdAt}
              id={item.id}
              title={item.title}
              value={item.value}
              type={type}
            />
          ))
        ) : (
          <span className="text-center pt-20 text-2xl text-gray-600 block">
            Nothing found
          </span>
        )}
      </div>
    </div>
  );
}
