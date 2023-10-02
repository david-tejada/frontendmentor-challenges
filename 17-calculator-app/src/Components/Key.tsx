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

interface KeyProps {
  code: KeyCode;
  span?: 1 | 2;
  onClick(code: KeyCode): void;
}

export function Key({ code, span = 1, onClick }: KeyProps) {
  let textSizeClass = /DEL|RESET|=/.test(code) ? "text-xl" : "text-4xl";
  let colSpanClass = span === 1 ? "col-span-1" : "col-span-2";

  return (
    <button
      data-code={code}
      onClick={() => onClick(code)}
      type="button"
      className={`rounded-md p-3 shadow-[0_4px_0] shadow-shadow-key ${textSizeClass} ${colSpanClass} bg-background-key text-content-key`}
    >
      {code}
    </button>
  );
}
