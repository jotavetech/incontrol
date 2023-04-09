import { itemsData } from "../../../mocks";

import { DetailedListType } from "./DetailedList.types";

const itemsData2 = [...itemsData, ...itemsData];

export function DetailedList({ type }: DetailedListType) {
  return (
    <div className="animeRight">
      <ul className="lg:min-w-[700px] mt-5 md:mt-10 bg-list-bg p-2 rounded-xl overflow-y-scroll h-[350px] lg:h-[400px] flex flex-col gap-3">
        {itemsData2.map((item) => (
          <li
            key={item.id}
            className="flex justify-around gap-2 bg-item-bg p-4 md:p-2 rounded-xl items-center"
          >
            <p className="text-sm lg:text-base">{item.title}</p>
            <p className="text-sm lg:text-base">desc lorem ipsum....</p>
            <span className="text-sm lg:text-base">{item.date}</span>
            <span
              className={`text-sm lg:text-base ${
                type === "entry" ? "text-secondary-color" : "text-red-400"
              }`}
            >
              ${item.value.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-1 md:mt-3 md:text-lg pb-3">
        Total: <span className="text-secondary-color">$10000.00</span>
      </p>
    </div>
  );
}
