import { useState, useContext, useEffect } from "react";

import { Input } from "../";

import { AddItemFormType } from "./AddItemForm.types";

import { ItemsContext } from "../../context/itemsContext";

export function AddItemForm({ open, onClose, defaultType }: AddItemFormType) {
  const { createNewItem } = useContext(ItemsContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState<null | number>(null);
  const [error, setError] = useState("");

  if (!open) return null;

  console.log(defaultType);

  const handleNewItem = (e: React.FormEvent) => {
    e.preventDefault();

    if (title && value) {
      setError("");

      createNewItem({ title, description, value, type: defaultType });
      onClose();

      setTitle("");
      setDescription("");
      setValue(null);
    } else setError("Title and value must be required");
  };

  return (
    <div className="fixed w-screen h-screen top-0 left-0 z-20">
      <div className="pt-16 lg:pt-32 z-30 h-screen mx-auto p-5 lg:pl-64">
        <div className="w-full md:w-[450px] bg-list-bg mx-auto mt-10 md:mt-16 rounded-xl shadow-lg animeTop dark:bg-zinc-200">
          <form onSubmit={handleNewItem} className="p-7 flex flex-col gap-3">
            <h1 className="text-center text-xl md:text-2xl">
              Add <span className="text-secondary-color">new</span>{" "}
              {defaultType}
            </h1>
            <Input
              id="title"
              onChange={({ target }) => setTitle(target.value)}
              value={title}
              placeholder="Item title"
              label="Item title"
              type="text"
            />
            <Input
              id="description"
              onChange={({ target }) => setDescription(target.value)}
              value={description}
              placeholder="Your description"
              label="Item description"
              type="text"
            />
            <Input
              id="value"
              onChange={({ target }) => setValue(+target.value)}
              value={value ? value : ""}
              placeholder="100.00"
              label="Item value"
              type="number"
            />

            {error && <p className="text-sm text-red-400">{error}</p>}
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={!title || value === null}
                className="bg-secondary-color px-4 py-2 w-32 text-sm mt-2 md:px-6 md:py-2 md:mt-5 md:text-base rounded-md hover:bg-secondary-color-2 disabled:opacity-60 disabled:cursor-default disabled:hover:bg-secondary-color dark:text-white"
              >
                Create
              </button>
              <button
                onClick={onClose}
                type="button"
                className="bg-item-bg px-4 py-2 w-32 text-sm mt-2 md:px-6 md:py-2 md:mt-5 md:text-base rounded-md hover:brightness-125 dark:text-white"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-90 -z-10"></div>
    </div>
  );
}
