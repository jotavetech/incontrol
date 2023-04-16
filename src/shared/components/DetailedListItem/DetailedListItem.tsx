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
        className="flex justify-around gap-2 bg-item-bg p-4 md:p-2 rounded-xl items-center hover:brightness-125 hover:cursor-pointer"
      >
        <p className="text-sm lg:text-base">{item.title}</p>
        <p className="text-sm lg:text-base">{item.description}</p>
        <span className="text-sm lg:text-base">
          {item.createdAt.toLocaleDateString("pt-BR")}
        </span>
        <span
          className={`text-sm lg:text-base ${
            type === "entry" ? "text-secondary-color" : "text-red-400"
          }`}
        >
          ${item.value.toFixed(2)}
        </span>
      </li>
    </>
  );
}
