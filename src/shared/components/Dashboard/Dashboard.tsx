// import { months } from "../../../mocks";

import { DetailedList } from "..";

import { useState } from "react";

export function Dashboard({ type }: { type: "entry" | "spent" }) {
  const [sortType, setSortType] = useState<
    "ascending" | "descending" | "noOrder"
  >("noOrder");

  return (
    <>
      <div className="mt-2 md:mt-5 flex gap-5 transition-colors">
        {/* <select
          className="bg-item-bg w-36 h-10 p-2 rounded-lg"
          defaultValue="all"
        >
          <option value="all">All</option>
          {months.map((month) => (
            <option value={month.toLowerCase()} key={month}>
              {month}
            </option>
          ))}
        </select> */}
        <select
          className="bg-item-bg w-36 h-10 p-2 rounded-lg dark:bg-zinc-100"
          defaultValue="noOrder"
          onChange={({ target }) =>
            setSortType(target.value as "ascending" | "descending" | "noOrder")
          }
        >
          <option value="noOrder">No order</option>
          <option value="ascending">Value (ascending)</option>
          <option value="descending">Value (descending)</option>
        </select>
      </div>
      <DetailedList type={type} sortType={sortType} />
    </>
  );
}
