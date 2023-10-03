import { divide, minus, plus, round, times } from "number-precision";

export function calculate(expression: string) {
  if (/[-+x/]/.test(expression[expression.length - 1])) {
    expression = expression.slice(0, expression.length - 1);
  }

  let parts = expression.split(/([-+x/])/g);

  let nextMulOrDivIndex = parts.findIndex((part) => /[x/]/.test(part));
  while (nextMulOrDivIndex !== -1) {
    const operate = parts[nextMulOrDivIndex] === "x" ? times : divide;
    const leftIndex = nextMulOrDivIndex - 1;
    const leftNumber = Number(parts[leftIndex]);
    const rightIndex = nextMulOrDivIndex + 1;
    const rightNumber = Number(parts[rightIndex]);

    parts.splice(leftIndex, 3, String(operate(leftNumber, rightNumber)));

    nextMulOrDivIndex = parts.findIndex((part) => /[x/]/.test(part));
  }

  let nextAddOrSubIndex = parts.findIndex((part) => /[+-]/.test(part));
  while (nextAddOrSubIndex !== -1) {
    const operate = parts[nextAddOrSubIndex] === "+" ? plus : minus;
    const leftIndex = nextAddOrSubIndex - 1;
    const leftNumber = Number(parts[leftIndex]);
    const rightIndex = nextAddOrSubIndex + 1;
    const rightNumber = Number(parts[rightIndex]);

    parts.splice(leftIndex, 3, String(operate(leftNumber, rightNumber)));

    nextAddOrSubIndex = parts.findIndex((part) => /[+-]/.test(part));
  }

  return Number(round(parts[0], 5));
}
