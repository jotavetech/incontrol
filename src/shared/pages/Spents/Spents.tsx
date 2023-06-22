import { useState } from "react";
import { AddItemForm, Dashboard } from "../../components";

export function Spents() {
  const [addMenuOpen, setAddMenuOpen] = useState(false);

  return (
    <>
      <AddItemForm
        onClose={() => setAddMenuOpen(false)}
        open={addMenuOpen}
        defaultType="spent"
      />
      <div className="pt-16 md:pt-24 overflow-hidden">
        <div className="p-4 lg:pl-64 flex flex-col">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Here is all your{" "}
            <span className="text-secondary-color">spents</span>
          </h1>
          <p className="text-lg md:text-xl mt-1 text-gray-300">
            You can order by values
          </p>
          <Dashboard type="spent" />
          <button
            onClick={() => setAddMenuOpen(true)}
            className="w-[100px] h-[40px] text-lg rounded-full bg-secondary-color hover:scale-105 transition-transform dark:text-white mb-20"
          >
            + Spent
          </button>
        </div>
      </div>
    </>
  );
}
