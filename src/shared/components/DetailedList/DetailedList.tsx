import { DetailedListItem, EditForm } from "../";

import { DetailedListType } from "./DetailedList.types";

import { useState, useContext, useEffect } from "react";

import { ItemsContext } from "../../context/itemsContext";

export function DetailedList({ type, sortType }: DetailedListType) {
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

  const [total, setTotal] = useState({
    entriesTotal: 0,
    spentsTotal: 0,
  });

  useEffect(() => {
    if (entries && entries.length > 0) {
      const entriesTotal = entries.reduce((acc, entry) => acc + entry.value, 0);
      setTotal((prev) => ({ ...prev, entriesTotal }));
    } else {
      setTotal((prev) => ({ ...prev, entriesTotal: 0 }));
    }

    if (spents && spents.length > 0) {
      const spentsTotal = spents.reduce((acc, entry) => acc + entry.value, 0);
      setTotal((prev) => ({ ...prev, spentsTotal }));
    } else {
      setTotal((prev) => ({ ...prev, spentsTotal: 0 }));
    }
  }, [entries, spents]);

  const [sortedEntries, setSortedEntries] = useState<Spent[] | null>(null);
  const [sortedSpents, setSortedSpents] = useState<Spent[] | null>(null);

  function sortAscending(a: Spent, b: Spent) {
    return a.value - b.value;
  }

  function sortDescending(a: Spent, b: Spent) {
    return b.value - a.value;
  }

  useEffect(() => {
    if (entries && type === "entry") {
      const savedEntries = [...entries];

      if (sortType === "ascending") {
        setSortedEntries(() => savedEntries.sort(sortAscending));
      }
      if (sortType === "descending") {
        setSortedEntries(() => savedEntries.sort(sortDescending));
      }
      if (sortType === "noOrder") {
        setSortedEntries(null);
      }
    }

    if (spents && type === "spent") {
      const savedSpents = [...spents];

      if (sortType === "ascending") {
        setSortedSpents(() => savedSpents.sort(sortAscending));
      }
      if (sortType === "descending") {
        setSortedSpents(() => savedSpents.sort(sortDescending));
      }
      if (sortType === "noOrder") {
        setSortedSpents(null);
      }
    }
  }, [sortType]);

  return (
    <>
      <EditForm
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        itemInfo={itemInfo}
        type={type === "entry" ? "entries" : "spents"}
      />
      <div className="animeRight">
        <ul className="lg:min-w-[700px] mt-5 md:mt-10 bg-list-bg p-2 rounded-xl overflow-y-scroll h-[350px] lg:h-[400px] flex flex-col gap-3">
          {loading ? (
            <span className="text-center pt-20 text-2xl text-gray-600 block">
              Loading...
            </span>
          ) : sortedEntries && type === "entry" ? (
            sortedEntries.map((item) => (
              <DetailedListItem
                type="entry"
                item={item}
                key={item.id}
                onClick={() => handleMenu({ item })}
              />
            ))
          ) : entries && entries.length > 0 && type === "entry" ? (
            entries.map((item) => (
              <DetailedListItem
                type="entry"
                item={item}
                key={item.id}
                onClick={() => handleMenu({ item })}
              />
            ))
          ) : sortedSpents && type === "spent" ? (
            sortedSpents.map((item) => (
              <DetailedListItem
                type="spent"
                item={item}
                key={item.id}
                onClick={() => handleMenu({ item })}
              />
            ))
          ) : spents && spents.length > 0 && type === "spent" ? (
            spents.map((item) => (
              <DetailedListItem
                type="spent"
                item={item}
                key={item.id}
                onClick={() => handleMenu({ item })}
              />
            ))
          ) : (
            <span className="text-center pt-20 text-2xl text-gray-600 block">
              Nothing found
            </span>
          )}
        </ul>
        <p className="mt-1 md:mt-3 md:text-lg pb-5 md:pb-7">
          Total:{" "}
          <span className="text-secondary-color">
            $
            {type === "entry"
              ? total.entriesTotal
              : total.spentsTotal
              ? total.spentsTotal
              : 0}
          </span>
        </p>
      </div>
    </>
  );
}
