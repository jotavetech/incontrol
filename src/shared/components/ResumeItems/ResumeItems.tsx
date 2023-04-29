import { ResumeItemsType } from "./ResumeItems.types";

import { useState, useEffect } from "react";

export function ResumeItems({ entries, spents }: ResumeItemsType) {
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    setRemaining(() => {
      if (entries && spents) {
        const totalRemaining = entries - spents;
        return totalRemaining;
      }
      return 0;
    });
  }, [entries, spents]);

  return (
    <ul className="text-sm mt-5 md:mt-2 md:text-base">
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
