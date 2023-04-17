import { ItemsContextType, NewItemType } from "./itemsContext.types";

import { useAuthState } from "react-firebase-hooks/auth";

import { ReactNode, createContext, useState, useEffect } from "react";

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

import { auth, db } from "../firebase";

export const ItemsContext = createContext({} as ItemsContextType);

export const ItemsProvider = ({ children }: { children: ReactNode }) => {
  const [entries, setEntries] = useState<Item[] | null>(null);
  const [spents, setSpents] = useState<Item[] | null>(null);
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

  const deleteItem = async ({
    itemId,
    type,
  }: {
    itemId: string;
    type: "spents" | "entries";
  }) => {
    if (user) {
      setLoading(true);
      try {
        const docRef = doc(db, type, itemId);
        await deleteDoc(docRef);
        type === "entries" ? getEntries() : getSpents();
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
  };

  const updateItem = async ({
    itemId,
    newData,
    type,
  }: {
    itemId: string;
    newData: {
      title: string;
      description: string;
      value: number;
    };
    type: "entries" | "spents";
  }) => {
    if (user) {
      setLoading(true);
      try {
        const docRef = doc(db, type, itemId);

        await updateDoc(docRef, {
          ...newData,
        });

        type === "entries" ? getEntries() : getSpents();
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
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
          })) as Item[];

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
          })) as Item[];

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
      value={{
        entries,
        spents,
        loading,
        createNewEntry,
        createNewSpent,
        updateItem,
        deleteItem,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
