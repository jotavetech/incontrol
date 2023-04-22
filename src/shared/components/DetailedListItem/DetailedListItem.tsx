import { DetailedListItemType } from "./DetailedListItem.types";

export function DetailedListItem({
  item,
  type,
  onClick,
}: DetailedListItemType) {
  return (
    <>
      <li
        onClick={onClick}
        key={item.id}
        className="flex justify-around gap-3 bg-item-bg p-4 md:p-2 rounded-xl items-center hover:brightness-125 hover:cursor-pointer h-16 dark:bg-white"
      >
        <p className="text-sm lg:text-base text-ellipsis max-w-[25%] w-[25%] whitespace-nowrap overflow-hidden">
          {item.title}
        </p>
        <p className="text-sm lg:text-base text-ellipsis max-w-[25%] w-[25%] whitespace-nowrap overflow-hidden">
          {item.description}
        </p>
        <span className="text-sm lg:text-base w-[">
          {item.createdAt.toLocaleDateString("pt-BR")}
        </span>
        <span
          className={`text-sm lg:text-base text-ellipsis w-[25%] whitespace-nowrap overflow-hidden ${
            type === "entry" ? "text-secondary-color" : "text-red-400 "
          }`}
        >
          ${item.value.toFixed(2)}
        </span>
      </li>
    </>
  );
}
