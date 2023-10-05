export type KeyCode =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "."
  | "+"
  | "-"
  | "x"
  | "/"
  | "DEL"
  | "RESET"
  | "=";

export function isKeyCode(code: string): code is KeyCode {
  return [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    "+",
    "-",
    "x",
    "/",
    "DEL",
    "RESET",
    "=",
  ].includes(code);
}

interface KeyProps {
  code: KeyCode;
  label?: string;
  span?: 1 | 2;
  onClick(code: KeyCode): void;
}

export function Key({ code, label, span = 1, onClick }: KeyProps) {
  let textSizeClass = /DEL|RESET|=/.test(code) ? "text-xl" : "text-4xl";
  let colSpanClass = span === 1 ? "col-span-1" : "col-span-2";

  return (
    <button
      data-code={code}
      aria-label={label}
      onClick={() => onClick(code)}
      type="button"
      className={`rounded-md p-3 shadow-[0_4px_0] shadow-shadow-key hover:brightness-150 ${textSizeClass} ${colSpanClass} bg-background-key text-content-key`}
    >
      {code}
    </button>
  );
}
