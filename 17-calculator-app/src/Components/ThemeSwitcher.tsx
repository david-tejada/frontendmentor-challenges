import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") ?? "1";
  });

  useEffect(() => {
    document.documentElement.dataset["theme"] = theme;
  }, [theme]);

  function handleThemeChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.checked === true) {
      setTheme(event.target.value);
      localStorage.setItem("theme", event.target.value);
    }
  }

  return (
    <div
      className="grid grid-cols-2 items-center"
      role="radiogroup"
      aria-labelledby="group-description"
    >
      <p
        id="group-description"
        className="row-start-2 mr-6 text-xs uppercase tracking-wider"
      >
        Theme
      </p>
      <div className="col-start-2 mb-1 flex justify-around text-sm leading-none">
        <label className="cursor-pointer" htmlFor="theme1">
          1
        </label>
        <label className="cursor-pointer" htmlFor="theme2">
          2
        </label>
        <label className="cursor-pointer" htmlFor="theme3">
          3
        </label>
      </div>
      <div className="relative col-start-2 flex justify-between rounded-full border-4 border-background-input bg-background-input">
        <input
          className="h-4 cursor-pointer opacity-0"
          type="radio"
          name="theme"
          id="theme1"
          value="1"
          checked={theme === "1"}
          onChange={(e) => handleThemeChange(e)}
        />
        <input
          className="h-4 cursor-pointer opacity-0"
          type="radio"
          name="theme"
          id="theme2"
          value="2"
          checked={theme === "2"}
          onChange={(e) => handleThemeChange(e)}
        />
        <input
          className="h-4 cursor-pointer opacity-0"
          type="radio"
          name="theme"
          id="theme3"
          value="3"
          checked={theme === "3"}
          onChange={(e) => handleThemeChange(e)}
        />
        <div className="forced-colors:bg-[ButtonText] absolute left-0 aspect-square h-full rounded-full bg-accent transition-all duration-300 ease-in-out [#theme2:checked~&]:left-[calc(50%-0.5rem)] [#theme3:checked~&]:left-[calc(100%-1rem)]"></div>
      </div>
    </div>
  );
}
