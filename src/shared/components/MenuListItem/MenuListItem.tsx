import { MenuListItemType } from "./MenuListItem.types";

export function MenuListItem({
  id,
  title,
  date,
  value,
  type,
}: MenuListItemType) {
  return (
    <div
      key={id}
      className="flex w-full justify-between bg-item-bg py-2 px-4 rounded-lg dark:bg-zinc-100 text-sm md:text-base"
    >
      <p className="w-[25%] whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </p>
      <span>{date.toLocaleDateString("pt-BR")}</span>
      <span
        className={`w-[25%] whitespace-nowrap overflow-hidden text-ellipsis ${
          type === "spent" ? "text-red-400" : "text-secondary-color-2"
        }`}
      >
        ${value.toFixed(2)}
      </span>
    </div>
  );
}
