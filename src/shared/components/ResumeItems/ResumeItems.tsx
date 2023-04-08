import { ResumeItemsType } from "./ResumeItems.types";

export function ResumeItems({
  piggyBank,
  entries,
  spents,
  remaining,
}: ResumeItemsType) {
  return (
    <ul className="text-sm mt-5 md:mt-2 md:text-base">
      <li>
        Piggy Bank:{" "}
        <span className="text-secondary-color">${piggyBank.toFixed(2)}</span>
      </li>
      <li>
        Entries Total:{" "}
        <span className="text-secondary-color">${entries.toFixed(2)}</span>
      </li>
      <li>
        Spents Total:{" "}
        <span className="text-secondary-color">${spents.toFixed(2)}</span>
      </li>
      <li>
        Remaining Money :{" "}
        <span className="text-secondary-color">${remaining.toFixed(2)}</span>
      </li>
    </ul>
  );
}
