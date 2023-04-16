import { DetailedListItem, EditForm } from "../";

import { DetailedListType } from "./DetailedList.types";

import { useState, useContext } from "react";

import { ItemsContext } from "../../context/itemsContext";

export function DetailedList({ type }: DetailedListType) {
  const [menuOpen, setMenuOpen] = useState(false);

  const [itemInfo, setItemInfo] = useState({
    id: "",
    title: "",
    description: "",
    value: 0,
  });

  const handleMenu = ({ item }: { item: Spent | Entry }) => {
    setItemInfo({ id: "", title: "", description: "", value: 0 });
    setMenuOpen(true);
    setItemInfo({ ...item });
  };

  const { entries, spents, loading } = useContext(ItemsContext);

  return (
    <>
      <EditForm
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        itemInfo={itemInfo}
      />
      <div className="animeRight">
        <ul className="lg:min-w-[700px] mt-5 md:mt-10 bg-list-bg p-2 rounded-xl overflow-y-scroll h-[350px] lg:h-[400px] flex flex-col gap-3">
          {loading ? (
            <span>Loading..</span>
          ) : entries && type === "entry" ? (
            entries.map((item) => (
              <DetailedListItem
                type="entry"
                item={item}
                key={item.id}
                onClick={() => handleMenu({ item })}
              />
            ))
          ) : spents && type === "spent" ? (
            spents.map((item) => (
              <DetailedListItem
                type="entry"
                item={item}
                key={item.id}
                onClick={() => handleMenu({ item })}
              />
            ))
          ) : (
            <span>Nothing found</span>
          )}
        </ul>
        <p className="mt-1 md:mt-3 md:text-lg pb-5 md:pb-7">
          Total: <span className="text-secondary-color">$10000.00</span>
        </p>
      </div>
    </>
  );
}
