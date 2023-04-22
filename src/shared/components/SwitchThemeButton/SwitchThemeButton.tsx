import { useEffect, useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

export function SwitchThemeButton() {
  const [actualTheme, setActualTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const getTheme = localStorage.getItem("theme") as "dark" | "light";

    if (getTheme) setActualTheme(getTheme);
  }, []);

  useEffect(() => {
    const html = document.querySelector("html")!;

    if (actualTheme === "dark") html.classList.add("dark");
    else html.classList.remove("dark");
  }, [actualTheme]);

  const switchTheme = () => {
    if (actualTheme === "dark") {
      setActualTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setActualTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button
      className="bg-item-bg p-2 rounded-full dark:bg-zinc-200 shadow-sm transition-colors"
      aria-label="switch theme"
      onClick={switchTheme}
    >
      {actualTheme === "dark" ? <BsFillSunFill /> : <BsFillMoonFill />}
    </button>
  );
}
