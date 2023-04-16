export type EditFormType = {
  open: boolean;
  onClose: () => void;
  itemInfo: {
    title: string;
    description: string;
    id: string;
    value: number;
  };
};
