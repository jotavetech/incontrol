import { ItemsContextType, NewItemType } from "./itemsContext.types";

import { useAuthState } from "react-firebase-hooks/auth";

import { ReactNode, createContext, useState, useEffect } from "react";

import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

import { auth, db } from "../firebase";

export const ItemsContext = createContext({} as ItemsContextType);

export const ItemsProvider = ({ children }: { children: ReactNode }) => {
  const [entries, setEntries] = useState<Entry[] | null>(null);
  const [spents, setSpents] = useState<Spent[] | null>(null);
  const [loading, setLoading] = useState(false);

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

  const getSpents = async () => {
    try {
      if (user) {
        setLoading(true);
        const spentsCollection = query(
          collection(db, "spents"),
          where("ownerId", "==", user.uid)
        );

        const spentsDoc = await getDocs(spentsCollection);

        setSpents(
          () =>
            spentsDoc.docs.map((spent) => ({
              ...spent.data(),
              id: spent.id,
            })) as Spent[]
        );
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const getEntries = async () => {
    try {
      if (user) {
        setLoading(true);
        const entriesCollection = query(
          collection(db, "entries"),
          where("ownerId", "==", user.uid)
        );

        const entriesDoc = await getDocs(entriesCollection);

        setEntries(
          () =>
            entriesDoc.docs.map((entry) => ({
              ...entry.data(),
              id: entry.id,
            })) as Entry[]
        );
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSpents();
    getEntries();
  }, [user]);

  useEffect(() => {
    console.log(spents);
  }, [spents, entries]);

  return (
    <ItemsContext.Provider
      value={{ entries, spents, loading, createNewEntry, createNewSpent }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
