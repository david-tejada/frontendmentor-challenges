import { Key, KeyCode } from "./Key";

interface KeypadProps {
  onClick(code: KeyCode): void;
}

export function Keypad({ onClick }: KeypadProps) {
  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-4 rounded-lg bg-background-input p-6">
      <Key onClick={(code) => onClick(code)} code="7" />
      <Key onClick={(code) => onClick(code)} code="8" />
      <Key onClick={(code) => onClick(code)} code="9" />
      <Key onClick={(code) => onClick(code)} code="DEL" />
      <Key onClick={(code) => onClick(code)} code="4" />
      <Key onClick={(code) => onClick(code)} code="5" />
      <Key onClick={(code) => onClick(code)} code="6" />
      <Key onClick={(code) => onClick(code)} code="+" />
      <Key onClick={(code) => onClick(code)} code="1" />
      <Key onClick={(code) => onClick(code)} code="2" />
      <Key onClick={(code) => onClick(code)} code="3" />
      <Key onClick={(code) => onClick(code)} code="-" />
      <Key onClick={(code) => onClick(code)} code="." />
      <Key onClick={(code) => onClick(code)} code="0" />
      <Key onClick={(code) => onClick(code)} code="/" />
      <Key onClick={(code) => onClick(code)} code="x" />
      <Key onClick={(code) => onClick(code)} code="RESET" span={2} />
      <Key onClick={(code) => onClick(code)} code="=" span={2} />
    </div>
  );
}
