import { divide, minus, plus, round, times } from "number-precision";

type Operator = "+" | "-" | "x" | "/";

export function isOperator(code: string): code is Operator {
  return ["+", "-", "x", "/"].includes(code);
}

function assertIsOperator(code: string): asserts code is Operator {
  if (!isOperator(code)) {
    throw new Error("The provided operator is not valid");
  }
}

/**
 * Evaluate a string containing a arithmetical expression and return the result
 * as a number
 *
 * @param expression A string with a arithmetical expression to execute
 * @returns A number with the result of the expression evaluation rounded to
 * five decimal places
 */
export function calculate(expression: string) {
  // We remove any possible trailing operator
  if (/[-+x/]/.test(expression[expression.length - 1])) {
    expression = expression.slice(0, -1);
  }

  const operations = { "+": plus, "-": minus, x: times, "/": divide };

  let parts = expression.split(/([-+x/])/);

  // We need to execute the operations in order of precedence
  for (const re of [/^[x/]$/, /^[+-]$/]) {
    let nextOperatorIndex = parts.findIndex((part) => re.test(part));
    while (nextOperatorIndex !== -1) {
      const operator = parts[nextOperatorIndex];
      assertIsOperator(operator);

      const operate = operations[operator];

      const leftIndex = nextOperatorIndex - 1;
      const rightIndex = nextOperatorIndex + 1;
      const leftNumber = Number(parts[leftIndex]);
      const rightNumber = Number(parts[rightIndex]);

      parts.splice(leftIndex, 3, String(operate(leftNumber, rightNumber)));

      nextOperatorIndex = parts.findIndex((part) => re.test(part));
    }
  }

  return round(parts[0], 5);
}
