import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export default function useDarkMode(
  defaultValue?: boolean,
): [boolean, (value: boolean) => void] {
  const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
  const isDarkOS = mediaQueryList.matches;

  const [dark, setDark] = useLocalStorage(
    "dark-mode",
    defaultValue ?? isDarkOS ?? false,
  );

  function setDarkMode(value: boolean) {
    document.documentElement.classList.toggle("dark", value);
    setDark(value);
  }

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    mediaQueryList.addEventListener("change", (event) => {
      setDark(event.matches);
    });
  }, [mediaQueryList, setDark]);

  return [dark, setDarkMode];
}
