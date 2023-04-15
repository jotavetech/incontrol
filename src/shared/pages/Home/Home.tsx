import { useState, useContext } from "react";

import {
  AddItemForm,
  HeadMenu,
  MenuList,
  MenuListItem,
  ResumeItems,
} from "../../components";

import { ItemsContext } from "../../context/itemsContext";

export function Home() {
  const [addMenuOpen, setAddMenuOpen] = useState(false);

  const { entries, spents } = useContext(ItemsContext);

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
              <p className="text-gray-100 text-sm md:text-base">
                Here is a summary of your finances
              </p>
              <ResumeItems entries={0} spents={0} piggyBank={0} remaining={0} />
            </HeadMenu>
            <HeadMenu>
              <div className="flex flex-col items-center">
                <h1 className="text-xl md:text-2xl font-semibold mt-3 md:mt-5">
                  <span className="text-secondary-color">Do</span> not waste
                  your time!
                </h1>
                <p className="text-gray-100 text-sm md:text-base text-center">
                  Add your expenses and income to keep an eye on your financial
                  life
                </p>
                <button
                  onClick={() => setAddMenuOpen(true)}
                  className="w-12 mt-3 h-12 rounded-full bg-secondary-color text-3xl hover:scale-105 transition-transform"
                >
                  +
                </button>
              </div>
            </HeadMenu>
          </div>
          <div className="flex flex-col md:flex-row gap-16 md:gap-10 mt-16 pb-10 animeLeft">
            <MenuList type="entries">
              <div className="flex flex-col gap-3 overflow-y-auto h-full">
                {entries ? (
                  entries.map((item) => (
                    <MenuListItem
                      key={item.id}
                      date={item.createdAt}
                      id={item.id}
                      title={item.title}
                      value={item.value}
                      type="entry"
                    />
                  ))
                ) : (
                  <span className="text-center pt-20 text-2xl text-gray-600 block">
                    Nothing found
                  </span>
                )}
              </div>
            </MenuList>
            <MenuList type="spents">
              <div className="flex flex-col gap-3 overflow-y-auto h-full">
                {spents ? (
                  spents.map((item) => (
                    <MenuListItem
                      key={item.id}
                      date={item.createdAt}
                      id={item.id}
                      title={item.title}
                      value={item.value}
                      type="spent"
                    />
                  ))
                ) : (
                  <span className="text-center pt-20 text-2xl text-gray-600 block">
                    Nothing found
                  </span>
                )}
              </div>
            </MenuList>
          </div>
        </div>
      </div>
    </>
  );
}
