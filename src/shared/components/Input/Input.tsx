import type { InputType } from "./Input.types";

export function Input({
  type,
  label,
  id,
  placeholder,
  value,
  onChange,
}: InputType) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-1">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
        className="bg-transparent border rounded-md p-2 hover:border-secondary-color transition-colors"
      />
    </div>
  );
}
