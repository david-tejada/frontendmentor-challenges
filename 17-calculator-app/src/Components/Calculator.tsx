import { useState } from "react";
import { Display } from "./Display";
import { KeyCode } from "./Key";
import { Keypad } from "./Keypad";
import { calculate } from "../calculate";

export function Calculator() {
  const [buffer, setBuffer] = useState("");

  function handleKeyPress(code: KeyCode) {
    if (buffer === "" && code === "-") {
      setBuffer("0-");
    }

    if (code === "RESET") {
      setBuffer("");
    }

    if (code === "DEL") {
      setBuffer((previous) => previous.slice(0, previous.length - 1));
    }

    if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(code)) {
      setBuffer((previous) => previous + code);
    }

    if (["+", "-", "x", "/"].includes(code)) {
      setBuffer((previous) => {
        const last = previous[previous.length - 1];
        if (["+", "-", "x", "/"].includes(last)) {
          previous = previous.slice(0, previous.length - 1);
        }
        return previous + code;
      });
    }

    if (code === ".") {
      setBuffer((previous) => {
        const match = previous.match(/([+-/x]|^)(\d*\.?\d*)$/);
        if (match && match[match.length - 1].includes(".")) {
          return previous;
        }
        return previous + ".";
      });
    }

    if (code === "=") {
      setBuffer((previous) => String(calculate(previous)));
    }
  }

  return (
    <>
      <Display value={buffer} />
      <Keypad onKeyPress={handleKeyPress} />
    </>
  );
}
