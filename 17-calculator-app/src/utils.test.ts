import { expect, test } from "vitest";
import { addThousandsSeparators } from "./utils";

test("It reformats the number to include the thousands separators", () => {
  expect(addThousandsSeparators("12345")).toBe("12,345");
});

test("It works with decimal numbers", () => {
  expect(addThousandsSeparators("1234567.007")).toBe("1,234,567.007");
});
