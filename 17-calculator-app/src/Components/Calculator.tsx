import { useState } from "react";
import { Display } from "./Display";
import { KeyCode } from "./Key";
import { Keypad } from "./Keypad";
import { calculate } from "../calculate";

interface Operator {
  type: "operator";
  value: "+" | "-" | "x" | "/";
}

interface Operand {
  type: "operand";
  value: string;
}

interface Result {
  type: "result";
  value: string;
}

type Item = Operator | Operand | Result;

function getBufferString(buffer: Item[]) {
  return buffer.map((unit) => unit.value).join("");
}

function isOperator(code: string): code is Operator["value"] {
  return ["+", "-", "x", "/"].includes(code);
}

export function Calculator() {
  const [buffer, setBuffer] = useState<Item[]>([
    { type: "operand", value: "0" },
  ]);

  function handleClick(code: KeyCode) {
    setBuffer((previous) => {
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
        next = [];
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
          next = [];
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

      return next.length ? next : [{ type: "operand", value: "0" }];
    });
  }

  return (
    <>
      <Display value={getBufferString(buffer)} />
      <Keypad onClick={handleClick} />
    </>
  );
}
