import { Display } from "./Display";
import { KeyCode } from "./Key";
import { Keypad } from "./Keypad";

function handleKeyPress(code: KeyCode) {
  console.log(code);
}

export function Calculator() {
  return (
    <>
      <Display value="" />
      <Keypad onKeyPress={handleKeyPress} />
    </>
  );
}
