import { useState, useContext, useEffect } from "react";

import { AddItemForm, HeadMenu, MenuList, ResumeItems } from "../../components";

import { ItemsContext } from "../../context/itemsContext";

export function Home() {
  const [addMenuOpen, setAddMenuOpen] = useState(false);

  const { entries, spents, loading } = useContext(ItemsContext);

  const [entriesTotal, setEntriesTotal] = useState(() => {
    if (entries) return entries.reduce((acc, entry) => acc + entry.value, 0);
    return 0;
  });
  const [spentsTotal, setSpentsTotal] = useState(() => {
    if (spents) return spents.reduce((acc, spent) => acc + spent.value, 0);
    return 0;
  });

  useEffect(() => {
    if (entries)
      setEntriesTotal(entries.reduce((acc, entry) => acc + entry.value, 0));

    if (spents)
      setSpentsTotal(spents.reduce((acc, spent) => acc + spent.value, 0));
  }, [entries, spents]);

  return (
    <>
      <AddItemForm onClose={() => setAddMenuOpen(false)} open={addMenuOpen} />
      <div className="pt-16 md:pt-24 overflow-hidden">
        <div className="p-4 lg:pl-64 flex flex-col">
          <div className="flex flex-col md:flex-row gap-5 md:gap-10 animeRight">
            <HeadMenu>
              <h1 className="text-xl md:text-2xl font-semibold">
                <span className="text-secondary-color">Hello,</span> it's good
                to see you!
              </h1>
              <p className="text-gray-100 text-sm md:text-base dark:text-black">
                Here is a summary of your finances
              </p>
              <ResumeItems entries={entriesTotal} spents={spentsTotal} />
            </HeadMenu>
            <HeadMenu>
              <div className="flex flex-col items-center">
                <h1 className="text-xl md:text-2xl font-semibold mt-3 md:mt-5">
                  <span className="text-secondary-color">Do</span> not waste
                  your time!
                </h1>
                <p className="text-gray-100 text-sm md:text-base text-center dark:text-black">
                  Add your expenses and income to keep an eye on your financial
                  life
                </p>
                <button
                  onClick={() => setAddMenuOpen(true)}
                  className="w-12 mt-3 h-12 rounded-full bg-secondary-color text-3xl hover:scale-105 transition-transform dark:text-white"
                >
                  +
                </button>
              </div>
            </HeadMenu>
          </div>
          <div className="flex flex-col md:flex-row gap-16 md:gap-10 mt-16 pb-10 animeLeft">
            <MenuList type="entry" items={entries} loading={loading} />
            <MenuList type="spent" items={spents} loading={loading} />
          </div>
        </div>
      </div>
    </>
  );
}
