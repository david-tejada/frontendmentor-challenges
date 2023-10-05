import { useState } from "react";
import { Display } from "./Display";
import { KeyCode } from "./Key";
import { Keypad } from "./Keypad";
import { calculate } from "../calculate";
import { addThousandsSeparators } from "../utils";

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

function isOperator(item: Item): item is Operator {
  return item?.type === "operator";
}

function isOperand(item: Item): item is Operand {
  return item?.type === "operand";
}

function isResult(item: Item): item is Result {
  return item?.type === "result";
}

function getExpressionString(expression: Item[], thousandsSeparators = false) {
  return expression
    .map((item) =>
      thousandsSeparators && item.type !== "operator"
        ? addThousandsSeparators(item.value)
        : item.value,
    )
    .join("");
}

const initialExpression: Item[] = [{ type: "operand", value: "0" }];

export function Calculator() {
  const [expression, setExpression] = useState<Item[]>(initialExpression);

  function handleClick(code: KeyCode) {
    setExpression((previous) => {
      // We create a clone to avoid modifying the previous state
      let next: Item[] = [...previous].map((item) => ({ ...item }));
      const lastItem = next[next.length - 1];

      switch (code) {
        case "+":
        case "-":
        case "x":
        case "/":
          if (isOperator(lastItem)) {
            lastItem.value = code;
          } else {
            next.push({ type: "operator", value: code });
          }
          return next;

        case "RESET":
          return initialExpression;

        case "DEL":
          if (isOperator(lastItem)) {
            next.pop();
          }

          if (isOperand(lastItem)) {
            if (lastItem.value.length > 1) {
              lastItem.value = lastItem.value.slice(0, -1);
            } else {
              next.pop();
            }
          }

          if (lastItem?.type === "result") {
            next = initialExpression;
          }
          return next;

        case ".":
          if (isOperand(lastItem)) {
            if (!lastItem.value.includes(".")) {
              lastItem.value += code;
            }
          } else if (isResult(lastItem)) {
            next = [{ type: "operand", value: "0." }];
          } else {
            next.push({ type: "operand", value: "0." });
          }
          return next;

        case "=":
          return [
            {
              type: "result",
              value: String(calculate(getExpressionString(next))),
            },
          ];

        // Digits
        default:
          if (isOperand(lastItem)) {
            lastItem.value =
              lastItem.value === "0" ? code : (lastItem.value += code);
          } else if (isResult(lastItem)) {
            next = [{ type: "operand", value: code }];
          } else {
            next.push({ type: "operand", value: code });
          }
          return next;
      }
    });
  }

  return (
    <>
      <Display value={getExpressionString(expression, true)} />
      <Keypad onClick={handleClick} />
    </>
  );
}
