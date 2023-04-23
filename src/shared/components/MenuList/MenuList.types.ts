export type MenuListType = {
  type: "spent" | "entry";
  items: Item[] | null;
  loading: boolean;
};
