export type AddItemFormType = {
  open: boolean;
  onClose: () => void;
  defaultType?: ItemType;
};

export type ItemType = "spent" | "entry";
