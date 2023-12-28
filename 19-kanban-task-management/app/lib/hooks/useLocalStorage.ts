"use client";

import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

export function useLocalStorage<T>(
  key: string,
  defaultValue: T,
): [T, Dispatch<SetStateAction<T>>] {
  const readValue = useCallback(() => {
    if (typeof window === "undefined") {
      return defaultValue;
    }

    try {
      const jsonValue = localStorage.getItem(key);
      return jsonValue !== null ? (JSON.parse(jsonValue) as T) : defaultValue;
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error);
      return defaultValue;
    }
  }, [key, defaultValue]);

  const [storedValue, setStoredValue] = useState(readValue);

  const setValue: Dispatch<SetStateAction<T>> = useCallback(
    (value) => {
      if (typeof window === "undefined") {
        console.warn(
          `Tried setting localStorage key “${key}” even though environment is not a client`,
        );
      }

      try {
        localStorage.setItem(key, JSON.stringify(value));
        setStoredValue(value);
      } catch (error) {
        console.warn(`Error setting localStorage key “${key}”:`, error);
      }
    },
    [key],
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setValue];
}
