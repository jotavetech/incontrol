export type DetailedListItemType = {
  onClick: () => void;
  type: "entry" | "spent";
  item: Spent;
};
