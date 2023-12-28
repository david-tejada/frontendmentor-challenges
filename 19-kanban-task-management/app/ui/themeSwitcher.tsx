"use client";

import { Switch } from "@headlessui/react";
import Image from "next/image";
import useDarkMode from "../lib/hooks/useDarkMode";

export default function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div className="flex items-center justify-center gap-6 rounded-md bg-blue-100 p-[0.875rem]">
      <Image src="/icon-light-theme.svg" width={18} height={18} alt="" />
      <Switch
        checked={darkMode}
        onChange={setDarkMode}
        className="relative inline-flex h-5 w-10 items-center rounded-full bg-purple-500"
      >
        <span className="sr-only">
          {darkMode ? `Toggle light mode` : `Toggle dark mode`}
        </span>
        <span
          className={`${
            darkMode ? "translate-x-[1.4375rem]" : "translate-x-[0.1875rem]"
          } inline-block h-[0.875rem] w-[0.875rem] transform rounded-full bg-white transition`}
        />
      </Switch>
      <Image src="/icon-dark-theme.svg" width={15} height={15} alt="" />
    </div>
  );
}
