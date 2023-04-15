export type MenuListItemType = {
  id: string;
  title: string;
  date: {
    seconds: number;
  };
  value: number;
  type: "spent" | "entry";
};
