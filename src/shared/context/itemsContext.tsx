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

        getSpents();
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

        getEntries();
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

        setSpents((prevSpents) => {
          const spents = spentsDoc.docs.map((spent) => ({
            ...spent.data(),
            createdAt: spent.data().createdAt.toDate(),
            id: spent.id,
          })) as Spent[];

          spents.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

          return spents;
        });
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

        setEntries((prevEntries) => {
          const entries = entriesDoc.docs.map((entry) => ({
            ...entry.data(),
            createdAt: entry.data().createdAt.toDate(),
            id: entry.id,
          })) as Entry[];

          entries.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

          return entries;
        });
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
