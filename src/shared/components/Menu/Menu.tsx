import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../../firebase";

import { useState } from "react";

export function Menu() {
  const [user] = useAuthState(auth);
  const [opened, setOpened] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpened(true)}
        className="fixed md:hidden right-10 bottom-20 z-50"
      >
        Menu
      </button>
      <aside
        className={`pt-20 md:pt-28 p-2 bg-list-bg h-screen w-48 md:w-60 ${
          opened ? "block" : "hidden"
        } md:block z-40`}
      >
        <div className="p-4">
          <button onClick={() => setOpened(false)} className="block md:hidden">
            Close menu
          </button>
          <p className="text-xl font-semibold text-center">
            Good <span className="text-secondary-color">something</span>
          </p>
        </div>
        <nav className="p-5">
          <ul className="flex flex-col gap-4 items-center">
            <li>
              <button className="p-2 bg-item-bg rounded-lg w-36 md:w-44">
                Home
              </button>
            </li>
            <li>
              <button className="p-2 bg-item-bg rounded-lg w-36 md:w-44">
                Entries
              </button>
            </li>
            <li>
              <button className="p-2 bg-item-bg rounded-lg w-36 md:w-44">
                Spents
              </button>
            </li>
            <li>
              <button className="p-2 bg-item-bg rounded-lg w-36 md:w-44">
                Piggy Bank
              </button>
            </li>
            <li>
              <button className="p-2 bg-item-bg rounded-lg w-36 md:w-44">
                Leave
              </button>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
