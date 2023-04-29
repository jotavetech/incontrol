export type ItemsContextType = {
  spents: Item[] | null;
  entries: Item[] | null;
  loading: boolean;
  createNewItem: ({ title, description, value, type }: NewItemType) => void;
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
  type: "entry" | "spent";
};
