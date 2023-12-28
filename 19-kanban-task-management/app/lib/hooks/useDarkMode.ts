"use client";

import { useCallback, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export default function useDarkMode(
  defaultValue?: boolean,
): [boolean, (value: boolean) => void] {
  const mediaQueryList =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-color-scheme: dark)")
      : undefined;
  const isDarkOS = mediaQueryList?.matches;

  const [dark, setDark] = useLocalStorage(
    "dark-mode",
    defaultValue ?? isDarkOS ?? false,
  );

  const setDarkMode = useCallback(
    (value: boolean) => {
      document.documentElement.classList.toggle("dark", value);
      setDark(value);
    },
    [setDark],
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const handleMediaQueryChange = useCallback(
    (event: MediaQueryListEvent) => {
      setDark(event.matches);
    },
    [setDark],
  );

  useEffect(() => {
    mediaQueryList?.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQueryList?.removeEventListener("change", handleMediaQueryChange);
    };
  }, [mediaQueryList, handleMediaQueryChange]);

  return [dark, setDarkMode];
}
