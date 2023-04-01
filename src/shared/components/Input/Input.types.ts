export type InputType = {
  type: React.HTMLInputTypeAttribute;
  label: string;
  id: string;
  placeholder: string;
  value: string | number;
  onChange: ({ target }: { target: HTMLInputElement }) => void;
};
