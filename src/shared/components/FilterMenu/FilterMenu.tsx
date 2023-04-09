import { months } from "../../../mocks";

export function FilterMenu() {
  return (
    <div className="mt-2 md:mt-5 flex gap-5">
      <select className="bg-item-bg w-36 h-10 p-2 rounded-lg">
        <option value="all" selected>
          All
        </option>
        {months.map((month) => (
          <option value={month}>{month}</option>
        ))}
      </select>
      <select className="bg-item-bg w-36 h-10 p-2 rounded-lg">
        <option value="all" selected>
          Sort By
        </option>
        <option value="ascending">Value (ascending)</option>
        <option value="descending">Value (descending)</option>
      </select>
    </div>
  );
}
