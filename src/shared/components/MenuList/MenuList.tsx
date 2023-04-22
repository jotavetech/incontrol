import { Link } from "react-router-dom";
import { MdShortcut } from "react-icons/md";

import { MenuListType } from "./MenuList.types";

export function MenuList({ type, children }: MenuListType) {
  return (
    <div className="w-full md:w-[50%] h-[230px] md:h-[300px] max-h-[300px] bg-list-bg dark:bg-zinc-200 rounded-xl p-2 md:p-5 relative transition-colors">
      <Link
        to={`/${type}`}
        className="absolute -top-10 font-semibold text-xl left-2 flex items-center gap-1"
      >
        {type === "entries" ? "Entries" : "Spents"}
        <MdShortcut className="fill-secondary-color" />
        <span className="text-[10px] text-gray-300">(click here)</span>
      </Link>
      {children}
    </div>
  );
}
