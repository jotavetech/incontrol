import type { InputType } from "./Input.types";

export function Input({
  type,
  label,
  id,
  placeholder,
  value,
  onChange,
  error,
  disabled,
}: InputType) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className={`mb-1 text-sm md:text-base ${error && " text-red-500"}`}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
        disabled={disabled}
        className={`bg-transparent border rounded-md px-2 p-1 md:p-2 hover:border-secondary-color transition-colors disabled:hover:border-white disabled:opacity-70 dark:border-1 dark:border-black ${
          error && " border-red-500"
        }`}
      />
      {error && <span className="text-sm mt-1 text-red-500">{error}</span>}
    </div>
  );
}
