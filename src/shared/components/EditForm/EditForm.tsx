import { Input } from "../";

import { useState } from "react";

import { EditFormType } from "./EditForm.types";

export function EditForm({ open, onClose }: EditFormType) {
  const [title, setTitle] = useState("Title");
  const [description, setDescription] = useState("Description");
  const [value, setValue] = useState(0);

  if (!open) return null;

  return (
    <div className="fixed w-screen h-screen top-0 left-0 z-20">
      <div className="pt-16 lg:pt-32 z-30 h-screen mx-auto p-5 lg:pl-64">
        <div className="w-full md:w-[450px] bg-list-bg mx-auto mt-20 rounded-xl shadow-lg animeTop">
          <form className="p-7 flex flex-col gap-3">
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
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={!title || !description || value <= 0}
                className="bg-secondary-color px-4 py-2 w-32 text-sm mt-2 md:px-6 md:py-2 md:mt-5 md:text-base rounded-md hover:bg-secondary-color-2 disabled:opacity-60 disabled:cursor-default disabled:hover:bg-secondary-color"
              >
                Save
              </button>
              <button
                onClick={onClose}
                type="button"
                className="bg-item-bg px-4 py-2 w-32 text-sm mt-2 md:px-6 md:py-2 md:mt-5 md:text-base rounded-md hover:brightness-125"
              >
                Cancel
              </button>
              <button
                onClick={() => console.log("delete")}
                type="button"
                className="bg-red-500 px-4 py-2 w-32 text-sm mt-2 md:px-6 md:py-2 md:mt-5 md:text-base rounded-md hover:brightness-125"
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-90 -z-10"></div>
    </div>
  );
}
