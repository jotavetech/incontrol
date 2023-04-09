import { Link } from "react-router-dom";

import { MenuListType } from "./MenuList.types";

export function MenuList({ type, children }: MenuListType) {
  return (
    <div className="w-full md:w-[50%] h-[230px] md:h-[300px] max-h-[300px] bg-list-bg rounded-xl p-2 md:p-5 relative">
      <Link
        to={`/${type}`}
        className="absolute -top-10 font-semibold text-xl left-2"
      >
        {type === "entries" ? "Entries" : "Spents"}
      </Link>
      {children}
    </div>
  );
}
