export type ItemsContextType = {
  spents: Spent[] | null;
  entries: Entry[] | null;
  loading: boolean;
  createNewEntry: ({ title, description, value }: NewItemType) => void;
  createNewSpent: ({ title, description, value }: NewItemType) => void;
  updateItem: ({
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
  }) => void;
  deleteItem: ({
    itemId,
    type,
  }: {
    itemId: string;
    type: "spents" | "entries";
  }) => void;
};

export type NewItemType = {
  title: string;
  description: string;
  value: number;
};
