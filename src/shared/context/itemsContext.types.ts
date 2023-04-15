export type ItemsContextType = {
  spents: Spent[] | null;
  entries: Entry[] | null;
  loading: boolean;
  createNewEntry: ({ title, description, value }: NewItemType) => void;
  createNewSpent: ({ title, description, value }: NewItemType) => void;
};

export type NewItemType = {
  title: string;
  description: string;
  value: number;
};
