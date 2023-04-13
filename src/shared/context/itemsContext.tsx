import { ItemsContextType, NewItemType } from "./itemsContext.types";

import { useAuthState } from "react-firebase-hooks/auth";

import { ReactNode, createContext, useState } from "react";

import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase";

export const ItemsContext = createContext({} as ItemsContextType);

export const ItemsProvider = ({ children }: { children: ReactNode }) => {
  const [entries, setEntries] = useState<Entry[] | null>(null);
  const [spents, setSpents] = useState<Entry[] | null>(null);

  const [user] = useAuthState(auth);

  const spentsCollection = collection(db, "spents");
  const entriesCollection = collection(db, "entries");

  const createNewSpent = async ({ title, description, value }: NewItemType) => {
    if (user) {
      try {
        await addDoc(spentsCollection, {
          ownerId: user.uid,
          title,
          description,
          value,
          createdAt: new Date(),
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const createNewEntry = async ({ title, description, value }: NewItemType) => {
    if (user) {
      try {
        await addDoc(entriesCollection, {
          ownerId: user.uid,
          title,
          description,
          value,
          createdAt: new Date(),
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <ItemsContext.Provider
      value={{ entries, spents, createNewEntry, createNewSpent }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
