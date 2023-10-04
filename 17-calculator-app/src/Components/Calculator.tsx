import { useState } from "react";
import { Display } from "./Display";
import { KeyCode } from "./Key";
import { Keypad } from "./Keypad";
import { calculate, isOperator } from "../calculate";

interface OperatorItem {
  type: "operator";
  value: "+" | "-" | "x" | "/";
}

interface OperandItem {
  type: "operand";
  value: string;
}

interface ResultItem {
  type: "result";
  value: string;
}

type Item = OperatorItem | OperandItem | ResultItem;

function getBufferString(buffer: Item[]) {
  return buffer.map((unit) => unit.value).join("");
}

const initialBuffer: Item[] = [{ type: "operand", value: "0" }];

export function Calculator() {
  const [buffer, setBuffer] = useState<Item[]>(initialBuffer);

  function handleClick(code: KeyCode) {
    setBuffer((previous) => {
      // We create a clone to avoid modifying the previous state
      let next = [...previous].map((item) => ({ ...item }));
      const lastItem = next.length ? next[next.length - 1] : undefined;

      if (isOperator(code)) {
        if (lastItem?.type === "operator") {
          lastItem.value = code;
        } else {
          next.push({ type: "operator", value: code });
        }
      }

      if (code === "RESET") {
        next = initialBuffer;
      }

      if (code === "DEL") {
        if (lastItem?.type === "operator") {
          next.pop();
        }

        if (lastItem?.type === "operand") {
          if (lastItem.value.length > 1) {
            lastItem.value = lastItem.value.slice(0, -1);
          } else {
            next.pop();
          }
        }

        if (lastItem?.type === "result") {
          next = initialBuffer;
        }
      }

      if (/\d/.test(code)) {
        if (lastItem?.type === "operand") {
          if (lastItem.value === "0") {
            lastItem.value = code;
          } else {
            lastItem.value += code;
          }
        } else if (lastItem?.type === "result") {
          next = [{ type: "operand", value: code }];
        } else {
          next.push({ type: "operand", value: code });
        }
      }

      if (code === ".") {
        if (lastItem?.type === "operand") {
          if (!lastItem.value.includes(".")) {
            lastItem.value += code;
          }
        } else if (lastItem?.type === "result") {
          next = [{ type: "operand", value: "0." }];
        } else {
          next.push({ type: "operand", value: "0." });
        }
      }

      if (code === "=") {
        next = [
          { type: "result", value: String(calculate(getBufferString(next))) },
        ];
      }

      return next;
    });
  }

  return (
    <>
      <Display value={getBufferString(buffer)} />
      <Keypad onClick={handleClick} />
    </>
  );
}
