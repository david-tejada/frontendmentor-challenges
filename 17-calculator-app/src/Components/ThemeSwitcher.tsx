export function ThemeSwitcher() {
  return (
    <div
      className="grid grid-cols-2 items-center"
      role="radiogroup"
      aria-describedby="group-description"
    >
      <p id="group-description" className="row-start-2 mr-6">
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
        />
        <input
          className="h-4 cursor-pointer opacity-0"
          type="radio"
          name="theme"
          id="theme2"
          value="2"
        />
        <input
          className="h-4 cursor-pointer opacity-0"
          type="radio"
          name="theme"
          id="theme3"
          value="3"
        />
        <div className="absolute left-0 aspect-square h-full rounded-full bg-accent transition-all duration-300 ease-in-out [#theme2:checked~&]:left-[calc(50%-0.5rem)] [#theme3:checked~&]:left-[calc(100%-1rem)]"></div>
      </div>
    </div>
  );
}
