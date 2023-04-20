import { MenuItemType } from "./MenuItem.types";

export function MenuItem({ children, handleNavigate }: MenuItemType) {
  return (
    <li>
      <button
        onClick={handleNavigate}
        className="py-2 px-5 bg-item-bg rounded-lg w-36 md:w-44 flex items-center gap-2 justify-between text-sm md:text-base hover:bg-secondary-color dark:bg-zinc-200 dark:hover:bg-zinc-300"
      >
        {children}
      </button>
    </li>
  );
}
