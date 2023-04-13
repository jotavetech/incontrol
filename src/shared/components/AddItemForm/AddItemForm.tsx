import { useState } from "react";
import { Input } from "../";
import { AddItemFormType } from "./AddItemForm.types";

export function AddItemForm({ open, onClose }: AddItemFormType) {
  const [title, setTitle] = useState("Title");
  const [description, setDescription] = useState("Description");
  const [value, setValue] = useState(0);

  if (!open) return null;

  return (
    <div className="fixed w-screen h-screen top-0 left-0 z-20">
      <div className="pt-16 lg:pt-32 z-30 h-screen mx-auto p-5 lg:pl-64">
        <div className="w-full md:w-[450px] bg-list-bg mx-auto mt-10 md:mt-16 rounded-xl shadow-lg animeTop">
          <form className="p-7 flex flex-col gap-3">
            <h1 className="text-center text-xl md:text-2xl">
              Add <span className="text-secondary-color">new</span> item
            </h1>
            <Input
              id="title"
              onChange={({ target }) => setTitle(target.value)}
              value={title}
              placeholder={title}
              label="Item title"
              type="text"
            />
            <Input
              id="description"
              onChange={({ target }) => setDescription(target.value)}
              value={description}
              placeholder={description}
              label="Item description"
              type="text"
            />
            <Input
              id="value"
              onChange={({ target }) => setValue(+target.value)}
              value={value}
              placeholder={String(value)}
              label="Item value"
              type="number"
            />
            <select className="bg-item-bg w-36 h-10 p-2 rounded-lg">
              <option value="entry" selected>
                Entry
              </option>
              <option value="spent" selected>
                Spent
              </option>
            </select>
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={!title || !description || value <= 0}
                className="bg-secondary-color px-4 py-2 w-32 text-sm mt-2 md:px-6 md:py-2 md:mt-5 md:text-base rounded-md hover:bg-secondary-color-2 disabled:opacity-60 disabled:cursor-default disabled:hover:bg-secondary-color"
              >
                Create
              </button>
              <button
                onClick={onClose}
                type="button"
                className="bg-item-bg px-4 py-2 w-32 text-sm mt-2 md:px-6 md:py-2 md:mt-5 md:text-base rounded-md hover:brightness-125"
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
